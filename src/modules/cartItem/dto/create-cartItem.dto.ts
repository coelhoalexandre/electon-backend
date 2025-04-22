import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import CartItemInterface from 'src/interfaces/cartItem.interface';

export default class CreateCartItemDto
  implements Omit<CartItemInterface, 'id' | 'userId'>
{
  @IsNotEmpty({ message: 'productId should not be empty' })
  @IsString({ message: 'productId should be a string' })
  productId: string;

  @IsOptional()
  @IsInt({ message: 'quantity should be a integer' })
  @IsPositive({ message: 'quantity should be a positive number' })
  quantity: number;
}
