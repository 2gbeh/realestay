import {
  Controller,
  Get,
  Post,
  Delete,
  Request,
  Body,
  UseGuards,
  UnprocessableEntityException,
} from '@nestjs/common';
//
import { LocalAuthGuard, JwtAuthGuard } from '@/shared/guards';
import { Unprotected } from '@/shared/decorators';
import { ERROR as E } from '@/shared/constants';
import { UserEntity } from '../users/utils/user.interface';
import { UserHelper } from '../users/utils/user.helper';
//
import {
  RegisterDto,
  LoginDto,
  ForgotPasswordDto,
  CreatePasswordDto,
  VerifyEmailDto,
} from './utils/auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Unprotected()
  @Post('register')
  async register(@Body() body: RegisterDto) {
    try {
      // validate password & passwordConfirmation (where applicable)
      if (
        body?.passwordConfirmation &&
        body.password !== body.passwordConfirmation
      )
        throw new UnprocessableEntityException(E.passwordMismatch);
      // attempt user registration
      const { id, email, username, otp, createdAt } =
        await this.authService.register(body);
      // TODO: send account activation email with OTP
      // generate access token
      const accessToken = this.authService.generateAccessToken({ id, email });
      return { accessToken, id, createdAt };
    } catch (err) {
      console.log('🚀 ~ AuthController ~ register ~ err:', err);
    }
  }

  @Post('verify-email')
  async verifyEmail(@Body() body: VerifyEmailDto) {
    try {
      const user = await this.authService.verifyEmail('', body);
      // TODO: send welcome email
      return UserHelper.sterilize(user);
    } catch (err) {
      console.log('🚀 ~ AuthController ~ verifyEmail ~ err:', err);
    }
  }

  @Unprotected()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: { user: UserEntity }) {
    try {
      const { id, email } = req.user;
      const accessToken = this.authService.generateAccessToken({ id, email });
      return { accessToken };
    } catch (err) {
      console.log('🚀 ~ AuthController ~ login ~ err:', err);
    }
  }

  @Unprotected()
  @Post('forgot-password')
  async forgotPassword(@Body() body: ForgotPasswordDto) {
    try {
      const { id, email, username, otp } =
        await this.authService.forgotPassword(body);
      // TODO: email OTP
      // generate access token
      const accessToken = this.authService.generateAccessToken({ id, email });
      return { accessToken };
    } catch (err) {
      console.log('🚀 ~ AuthController ~ forgotPassword ~ err:', err);
    }
  }

  @Post('create-password')
  async createPassword(@Body() body: CreatePasswordDto) {
    try {
      // validate password & passwordConfirmation (where applicable)
      if (
        body?.passwordConfirmation &&
        body.password !== body.passwordConfirmation
      )
        throw new UnprocessableEntityException(E.passwordMismatch);
      // reset password
      const user = await this.authService.createPassword('', body);
      // TODO: send password reset notification email
      return UserHelper.sterilize(user);
    } catch (err) {
      console.log('🚀 ~ AuthController ~ createPassword ~ err:', err);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async profile(@Request() req: { user: UserEntity }) {
    try {
      return UserHelper.sterilize(req.user);
    } catch (err) {
      console.log('🚀 ~ AuthController ~ profile ~ err:', err);
    }
  }

  @UseGuards(LocalAuthGuard)
  @Delete('logout')
  async logout(@Request() req: any) {
    try {
      return req.logout();
    } catch (err) {
      console.log('🚀 ~ AuthController ~ logout ~ err:', err);
    }
  }
}
