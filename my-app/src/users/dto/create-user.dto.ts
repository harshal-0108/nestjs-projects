import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsInt()
  @Min(18)
  age!: number;
}