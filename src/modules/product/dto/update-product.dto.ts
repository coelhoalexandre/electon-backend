import { PartialType } from '@nestjs/mapped-types';
import CreateProductDto from './create-product.dto';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export default class UpdateProductDTO extends PartialType(CreateProductDto) {
  @IsOptional()
  @IsInt({ message: 'stars should be a integer' })
  @Min(0, { message: 'stars should be greater than or equal to zero' })
  @Max(5, { message: 'stars should be less than or equal to five' })
  stars: number;
}
