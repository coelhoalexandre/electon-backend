import {
  Body,
  Controller,
  Delete,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CartItemService } from './cartItem.service';
import CreateCartItemDto from './dto/create-cartItem.dto';
import { Request as ExpressRequest } from 'express';
import { AuthGuard } from '../auth/auth.guard';
import CartItemModel from './cartItem.model';

@Controller('cart-item')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @UseGuards(AuthGuard)
  @Post('auth')
  async addCartItemAuth(
    @Request() req: ExpressRequest,
    @Body() item: CreateCartItemDto
  ) {
    try {
      return await this.cartItemService.addItem(
        new CartItemModel(item, req['user'].sub)
      );
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Post('no-auth')
  async addCartItemNoAuth(@Body() item: CreateCartItemDto) {
    try {
      return await this.cartItemService.addItem(new CartItemModel(item));
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch('auth/:id')
  async updateCartItemAuth(
    @Body() item: { quantity: number },
    @Param('id') id: string
  ) {
    try {
      return await this.cartItemService.updateItem(id, item);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Patch('no-auth/:id')
  async updateCartItemNoAuth(
    @Body() item: { quantity: number },
    @Param('id') id: string
  ) {
    try {
      return await this.cartItemService.updateItem(id, item);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Delete('auth/all')
  async deleteAllCartItemsAuth(@Request() req: ExpressRequest) {
    try {
      return await this.cartItemService.deleteAllItems(req['user'].sub);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Delete('auth/:id')
  async deleteCartItemAuth(@Param('id') id: string) {
    try {
      return await this.cartItemService.deleteItem(id);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Delete('no-auth/:id')
  async deleteCartItemNoAuth(@Param('id') id: string) {
    try {
      return await this.cartItemService.deleteItem(id);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }
}
