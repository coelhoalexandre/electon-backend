import { PartialType } from '@nestjs/mapped-types';
import CreateCategoryDto from './create-category.dto';

export default class UpdateCategoryDTO extends PartialType(CreateCategoryDto) {}
