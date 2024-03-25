// update-progress.dto.ts
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ConfirmUpdateProgressDto {
    userId?: number;
    @IsNotEmpty()
    @IsString()
    roadmapId: string;
}
