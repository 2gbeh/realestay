import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
//
import { ERROR as E } from '@/shared/constants';
import { StringHelper as _ } from '@/shared/helpers';
import { UserEntity } from '../users/utils/user.interface';
import { UsersService } from '../users/users.service';
//
import {
  AccessTokenDto,
  RegisterDto,
  LoginDto,
  ForgotPasswordDto,
  CreatePasswordDto,
  VerifyEmailDto,
} from './utils/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  generateAccessToken(user: AccessTokenDto): string {
    try {
      return this.jwtService.sign(
        { username: user.email, sub: user.id },
        {
          secret: this.configService.get<string>('JWT_SECRET'),
        },
      );
    } catch (err) {
      console.log('🚀 ~ AuthService ~ generateAccessToken ~ err:', err);
    }
  }

  async register(body: RegisterDto): Promise<UserEntity | null> {
    try {
      // check username duplicate entry
      if (await this.usersService.findWhere({ username: body.username }))
        throw new UnprocessableEntityException(E.usernameTaken);
      // check email duplicate entry
      if (await this.usersService.findWhere({ email: body.email }))
        throw new UnprocessableEntityException(E.emailTaken);
      // generate OTP and hashed password
      const otp = _.generateOTP();
      const password = await hash(body.password, 10);
      // create user
      return await this.usersService.create({ ...body, otp, password });
    } catch (err) {
      console.log('🚀 ~ AuthService ~ register ~ err:', err);
    }
  }

  async verifyEmail(
    id: string,
    body: VerifyEmailDto,
  ): Promise<UserEntity | null> {
    try {
      // verify otp and update verified column
      if (await this.usersService.findAll({ id, otp: body.otp })) {
        return await this.usersService.update(id, {
          verifiedAt: _.getDateTime(),
        });
      }
      throw new UnprocessableEntityException(E.invalidOTP);
    } catch (err) {
      console.log('🚀 ~ AuthService ~ verifyEmail ~ err:', err);
    }
  }

  async login(body: LoginDto): Promise<UserEntity | null> {
    try {
      // verify username or email exists
      const user = await this.usersService.findByIdentifier(body.user);
      if (user) {
        // compare plain-text password with hashed passwrd
        if (await compare(body.password, user.password)) {
          // update login notes
          return await this.usersService.update(user.id, {
            notes: {
              userAgent: body?.device,
              lastLogonDate: _.getTimestamp(),
            },
          });
        }
        throw new UnprocessableEntityException(E.invalidPassword);
      }
      throw new UnprocessableEntityException(E.invalidUserId);
    } catch (err) {
      console.log('🚀 ~ AuthService ~ login ~ err:', err);
    }
  }

  async forgotPassword(body: ForgotPasswordDto): Promise<UserEntity | null> {
    try {
      // verify email exists
      const { id } = await this.usersService.findWhere({
        email: body.email,
      });
      // generate OTP and save
      if (id) {
        return await this.usersService.update(id, { otp: _.generateOTP() });
      }
      throw new UnprocessableEntityException(E.emailNotFound);
    } catch (err) {
      console.log('🚀 ~ AuthService ~ forgotPassword ~ err:', err);
    }
  }

  async createPassword(
    id: string,
    body: CreatePasswordDto,
  ): Promise<UserEntity | null> {
    try {
      // hash new password and save
      const password = await hash(body.password, 10);
      return await this.usersService.update(id, { password });
    } catch (err) {
      console.log('🚀 ~ AuthService ~ createPassword ~ err:', err);
    }
  }
}
