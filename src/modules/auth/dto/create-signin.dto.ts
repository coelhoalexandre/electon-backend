import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateSignInDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
