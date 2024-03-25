// update-progress.dto.ts
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProgressDto {
    @IsNumber()
    userId: number;
    @IsString()
    readonly roadmapId: string;
    @IsNumber()
    @IsOptional()
    readonly percentage?: number;
}
