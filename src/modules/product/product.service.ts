import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import UpdateProductDTO from './dto/update-product.dto';
import ProductModel from './product.model';
import ProductInterface from '../../interfaces/product.interface';
import ProductCategoryInterface from 'src/interfaces/product-category.interface';
import ProductQueryString from 'src/interfaces/product-query-string.interface';

@Injectable()
export class ProductService {
  constructor(
    @Inject('REPOSITORY')
    private productRepository: Prisma.ProductDelegate
  ) {}

  async create(
    createdProduct: ProductInterface
  ): Promise<ProductCategoryInterface> {
    const product = new ProductModel(createdProduct);
    return await this.productRepository.create({
      data: {
        ...product,
        categories: {
          connect: product.categories.map((product) => ({ id: product })),
        },
      },
      include: { categories: true },
    });
  }

  async findMany(
    {
      categories,
      tags,
      take: takeString,
      skip: skipString,
      q,
    }: ProductQueryString,
    isOrderedByPopularity?: boolean
  ): Promise<ProductCategoryInterface[]> {
    const where: Prisma.ProductWhereInput = {
      name: { contains: q },
      categories: {
        some: {
          OR: categories
            ?.split(',')
            .map((category) => ({ slug: { equals: category } })),
        },
      },
      tags: tags ? { hasSome: tags.split(',') } : undefined,
    };

    const take = isNaN(Number(takeString)) ? 5 : Number(takeString);
    const skip = isNaN(Number(skipString)) ? 0 : Number(skipString);

    const orderBy: Prisma.ProductOrderByWithRelationInput | undefined =
      isOrderedByPopularity ? { stars: 'desc' } : undefined;

    return await this.productRepository.findMany({
      take,
      skip,
      where,
      orderBy,
      include: { categories: true },
    });
  }

  async findOne(slug: string) {
    return await this.productRepository.findUnique({
      where: { slug },
      include: { categories: true },
    });
  }

  async updateOne(
    id: string,
    productDTO: UpdateProductDTO
  ): Promise<ProductCategoryInterface> {
    const { tags, colors, categories } = productDTO;
    const data: Prisma.ProductUpdateInput = {
      ...productDTO,
      tags: { push: tags || [] },
      colors: { push: colors || [] },
      categories: {
        connect: categories?.map((product) => ({ id: product })) || [],
      },
      updatedAt: new Date(),
    };

    return await this.productRepository.update({
      where: { id },
      data,
      include: { categories: true },
    });
  }

  async deleteOne(id: string) {
    return await this.productRepository.delete({
      where: { id },
      include: { categories: true },
    });
  }
}
