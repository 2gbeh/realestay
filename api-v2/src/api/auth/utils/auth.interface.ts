export interface AccessTokenDto {
  id: string;
  email: string;
}

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export interface VerifyEmailDto {
  otp: number;
}

export interface LoginDto {
  user: string;
  password: string;
  device?: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface CreatePasswordDto {
  password: string;
  passwordConfirmation?: string;
}
