import {
  IsString,
  IsEmail,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  department!: string;

  @IsNumber()
  salary!: number;
}