import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import UserModel from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(email);

    if (
      !(user && (await UserModel.isValidPassword(pass, user?.password || '')))
    ) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      email: user.email,
      username: user.username,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
