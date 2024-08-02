import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

// create-user-dto
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  isActive: boolean;
}
