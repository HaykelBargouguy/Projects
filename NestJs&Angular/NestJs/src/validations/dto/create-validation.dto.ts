import { IsBoolean, IsNumber, IsDate, IsString, IsNotEmpty } from 'class-validator';

export class CreateValidationDto {
    userId?: number;
    @IsNotEmpty()
    @IsString()
    readonly milestoneId: string;
    @IsNotEmpty()
    @IsBoolean()
    readonly passed: boolean;
    @IsNotEmpty()
    @IsNumber()
    readonly score: number;
}