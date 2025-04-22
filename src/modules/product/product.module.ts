import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import PrismaModelNames from '../../enum/PrismaModelNames';
import repositoryFactoryProvider from '../../factories/repositoryFactory';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    repositoryFactoryProvider(PrismaModelNames.PRODUCT),
  ],
})
export class ProductModule {}
