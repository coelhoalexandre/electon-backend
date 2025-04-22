import CartItemInterface from 'src/interfaces/cartItem.interface';
import CreateCartItemDto from './dto/create-cartItem.dto';
import { UnauthorizedException } from '@nestjs/common';

export default class CartItemModel implements CartItemInterface {
  readonly id: string;
  readonly userId?: string;
  readonly productId: string;
  readonly quantity: number;

  constructor(cartItem: CreateCartItemDto, userId?: string) {
    if (typeof userId !== 'string' && typeof userId !== 'undefined')
      throw new UnauthorizedException();
    this.userId = userId;
    this.productId = cartItem.productId;
    this.quantity = cartItem.quantity || 1;
  }
}
