import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsArray,
} from 'class-validator';
import CategoryInterface from '../../../interfaces/category.interface';

export default class CreateCategoryDto
  implements
    Omit<
      CategoryInterface,
      'id' | 'slug' | 'totalItems' | 'createdAt' | 'updatedAt' | 'deletedAt'
    >
{
  @IsNotEmpty({ message: 'name should not be empty' })
  @IsString({ message: 'name should be a string' })
  name: string;

  @IsNotEmpty({ message: 'src should not be empty' })
  @IsString({ message: 'src should be a string' })
  src: string;

  @IsNotEmpty({ message: 'alt should not be empty' })
  @IsString({ message: 'alt should be a string' })
  alt: string;

  @IsOptional()
  @IsArray({ message: 'products should be array' })
  products?: string[];

  @IsOptional()
  @IsBoolean({ message: 'availability should be a boolean' })
  isVisible: boolean;
}
