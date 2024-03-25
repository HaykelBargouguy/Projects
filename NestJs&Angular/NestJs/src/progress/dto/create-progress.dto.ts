import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProgressDto {
  userId?: number;
  @IsNotEmpty()
  @IsString()
  roadmapId: string;
  @IsNumber()
  @IsOptional()
  percentage: number = 0; // Default to 0 if not provided
}