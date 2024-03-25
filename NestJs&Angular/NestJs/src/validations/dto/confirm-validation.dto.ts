import { IsBoolean, IsNumber, IsDate, IsString, IsNotEmpty, IsArray } from 'class-validator';

export class ConfirmValidationDto {
    userId?: number;
    @IsNotEmpty()
    @IsString()
    milestoneId: string;
    @IsNotEmpty()
    score:number
}