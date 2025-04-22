import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import UpdateCategoryDTO from './dto/update-category.dto';
import CategoryInterface from '../../interfaces/category.interface';
import CategoryProductInterface from 'src/interfaces/category-product.interface';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('REPOSITORY')
    private categoryRepository: Prisma.CategoryDelegate
  ) {}

  async create(category: CategoryInterface): Promise<CategoryProductInterface> {
    return await this.categoryRepository.create({
      data: {
        ...category,
        products: {
          connect: category.products?.map((product) => ({ id: product })) || [],
        },
      },
      include: { products: true },
    });
  }

  async findAll() {
    return await this.categoryRepository.findMany({
      include: { products: true, _count: true },
    });
  }

  async updateOne(
    id: string,
    categoryDTO: UpdateCategoryDTO
  ): Promise<CategoryProductInterface> {
    return await this.categoryRepository.update({
      where: { id },
      data: { ...categoryDTO, products: {} },
      include: { products: true },
    });
  }
}
