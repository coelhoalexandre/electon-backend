import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import UserModel from './user.model';
import { AuthGuard } from '../auth/auth.guard';
import { Request as ExpressRequest } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body()
    user: CreateUserDto
  ) {
    try {
      return await this.userService.create(new UserModel(user));
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Get()
  async findMany() {
    try {
      return await this.userService.findMany();
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get('cart-items')
  async getCartItems(@Request() req: ExpressRequest) {
    try {
      return await this.userService.getCartItems(req['user'].sub);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch('cart-items')
  async updateCartItems(
    @Request() req: ExpressRequest,
    @Body() body: { cartItemIds: string[] }
  ) {
    try {
      return await this.userService.updateCartItems(body, req['user'].sub);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }
}
