import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMilestoneDto {
    @IsOptional()
    @IsString()
    roadmapId?:string
    @IsOptional()
    @IsString()
    description?:string
    @IsOptional()
    @IsNumber()
    orderNumber?:number
}