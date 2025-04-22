import { Module } from '@nestjs/common';
import PrismaModelNames from '../../enum/PrismaModelNames';
import repositoryFactoryProvider from '../../factories/repositoryFactory';
import { CartItemService } from './cartItem.service';
import { CartItemController } from './cartItem.controller';

@Module({
  imports: [],
  controllers: [CartItemController],
  providers: [
    CartItemService,
    repositoryFactoryProvider(PrismaModelNames.CART_ITEM),
  ],
})
export class CartItemModule {}
