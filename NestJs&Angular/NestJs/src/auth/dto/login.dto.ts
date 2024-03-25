import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import ErrorMessages from '../../utils/error.messages';

export class LoginDto {
  @IsNotEmpty({message:ErrorMessages.emailRequired})
  @IsEmail({},{ message: ErrorMessages.invalidEmail })
  email: string;
  @IsNotEmpty({message:ErrorMessages.passwordRequired})
  password: string;
}
