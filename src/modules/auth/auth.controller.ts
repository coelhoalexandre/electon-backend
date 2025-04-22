import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
  Response,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import CreateSignInDto from './dto/create-signin.dto';
import { AuthGuard } from './auth.guard';
import { Request as ExpressRequest } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signIn: CreateSignInDto) {
    Response();
    return this.authService.signIn(signIn.email, signIn.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: ExpressRequest) {
    return req['user'];
  }

  @UseGuards(AuthGuard)
  @Delete('logout')
  logout() {
    console.log('No implementation');
  }
}
