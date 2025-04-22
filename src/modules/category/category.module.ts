import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import PrismaModelNames from '../../enum/PrismaModelNames';
import repositoryFactoryProvider from '../../factories/repositoryFactory';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    repositoryFactoryProvider(PrismaModelNames.CATEGORY),
  ],
})
export class CategoryModule {}
