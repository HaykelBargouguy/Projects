import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, MinLength, IsNotEmpty, Matches } from 'class-validator';
import ErrorMessages from '../../utils/error.messages';
import { UserRoleEnum } from '../../enums/user-role.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @MinLength(4,{message:ErrorMessages.invalidLengthUsername})
  username?: string;
  

  @IsOptional()
  @IsEmail({}, { message:ErrorMessages.invalidEmail})
  email?: string;

  @IsOptional()
  @MinLength(6, { message:ErrorMessages.invalidLengthPassword})
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/, {
    message:ErrorMessages.invalidPassword,
  })
  password: string;
  @IsOptional()
  role?:UserRoleEnum;
}
