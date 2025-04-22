import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import CreateCategoryDto from './dto/create-category.dto';
import UpdateCategoryDTO from './dto/update-category.dto';
import CategoryModel from './category.model';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(
    @Body()
    category: CreateCategoryDto
  ) {
    try {
      return await this.categoryService.create(new CategoryModel(category));
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const categories = await this.categoryService.findAll();
      const handledCategories = categories.map((category) => {
        const data = {
          ...category,
          totalItems: category._count.products,
          _count: undefined,
        };

        delete data._count;

        return data;
      });

      return handledCategories;
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() categoryDTO: UpdateCategoryDTO
  ) {
    try {
      return await this.categoryService.updateOne(id, categoryDTO);
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }
}
