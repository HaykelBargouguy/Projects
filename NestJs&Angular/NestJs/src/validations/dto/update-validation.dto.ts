import { IsBoolean, IsNumber, IsOptional, IsDate, IsString, IsNotEmpty } from 'class-validator';
import { CreateValidationDto } from './create-validation.dto';

export class UpdateValidationDto  {
    userId?: number;
    @IsNotEmpty()
    @IsString()
    readonly milestoneId: string;

    @IsBoolean()
    readonly passed?: boolean;

    @IsNumber()
    readonly score?: number;
}