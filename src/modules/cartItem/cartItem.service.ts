import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import CartItemProductInterface from 'src/interfaces/cartItem-product.interface';
import CartItemInterface from 'src/interfaces/cartItem.interface';

@Injectable()
export class CartItemService {
  constructor(
    @Inject('REPOSITORY')
    private cartItemRepository: Prisma.CartItemDelegate
  ) {}

  async addItem(
    cartItem: CartItemInterface
  ): Promise<CartItemProductInterface> {
    return await this.cartItemRepository.create({
      data: {
        ...cartItem,
      },
      include: { product: true },
    });
  }

  async updateItem(id: string, itemDto: { quantity: number }) {
    console.log(itemDto);
    return await this.cartItemRepository.update({
      where: { id },
      data: itemDto,
      include: { product: true },
    });
  }

  async deleteItem(id: string) {
    return await this.cartItemRepository.delete({
      where: { id },
      include: { product: true },
    });
  }

  async deleteAllItems(userId: string) {
    return await this.cartItemRepository.deleteMany({ where: { userId } });
  }
}
