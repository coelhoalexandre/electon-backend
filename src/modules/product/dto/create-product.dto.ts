import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsInt,
  IsOptional,
  Min,
  IsArray,
} from 'class-validator';
import ProductInterface from '../../../interfaces/product.interface';

export default class CreateProductDto
  implements
    Omit<
      ProductInterface,
      'id' | 'slug' | 'stars' | 'createdAt' | 'updatedAt' | 'deletedAt'
    >
{
  @IsNotEmpty({ message: 'name should not be empty' })
  @IsString({ message: 'name should be a string' })
  name: string;

  @IsNotEmpty({ message: 'price should not be empty' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message: 'price should be a number with no maximum of two decimal places',
    }
  )
  price: number;

  @IsNotEmpty({ message: 'src should not be empty' })
  @IsString({ message: 'src should be a string' })
  src: string;

  @IsNotEmpty({ message: 'alt should not be empty' })
  @IsString({ message: 'alt should be a string' })
  alt: string;

  @IsOptional()
  @IsBoolean({ message: 'availability should be a boolean' })
  availability: boolean;

  @IsOptional()
  @IsArray({ message: 'categories should be array' })
  categories?: string[];

  @IsOptional()
  @IsArray({ message: 'tags should be array' })
  tags: string[];

  @IsOptional()
  @IsArray({ message: 'colors should be array' })
  colors: string[];

  @IsNotEmpty({ message: 'stockQuantity should not be empty' })
  @IsInt({ message: 'stockQuantity should be a integer' })
  @Min(0, { message: 'stockQuantity should be greater than or equal to zero' })
  stockQuantity: number;
}
