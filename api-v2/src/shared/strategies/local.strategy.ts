import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
//
import { AuthService } from '@/api/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'user', passReqToCallback: true });
  }

  async validate(req: any, user: string, password: string): Promise<any> {
    try {
      let device = req.headers['user-agent'] || 'unknown';
      const res = await this.authService.login({ user, password, device });
      //
      return res;
    } catch (err) {
      console.log('🚀 ~ LocalStrategy ~ validate ~ err:', err);
    }
  }
}
