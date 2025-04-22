import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDTO from './dto/update-product.dto';
import ProductModel from './product.model';
import ProductQueryString from 'src/interfaces/product-query-string.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(
    @Body()
    product: CreateProductDto
  ) {
    try {
      return await this.productService.create(new ProductModel(product));
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Get()
  async findMany(@Query() queryString: ProductQueryString) {
    try {
      return await this.productService.findMany(queryString);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Get('popular')
  async getMostPopular(@Query() queryString: ProductQueryString) {
    try {
      return await this.productService.findMany(queryString, true);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    try {
      const product = await this.productService.findOne(slug);

      if (!product) throw new Error('Product with this slug does not exist');

      return product;
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() productDTO: UpdateProductDTO
  ) {
    try {
      return await this.productService.updateOne(id, productDTO);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    try {
      return await this.productService.deleteOne(id);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }
}
