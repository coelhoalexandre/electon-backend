import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import UserInterface from '../../../interfaces/user.interface';

export default class CreateUserDto
  implements Omit<UserInterface, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
{
  @IsNotEmpty({ message: 'email should not be empty' })
  @IsString({ message: 'email should be string' })
  @IsEmail({}, { message: 'email should be email' })
  email: string;

  @IsNotEmpty({ message: 'username should not be empty' })
  @IsString({ message: 'username should be string' })
  username: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  @IsString({ message: 'password should be string' })
  password: string;
}
