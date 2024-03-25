import { PartialType } from '@nestjs/mapped-types';
import { CreateRoadmapDto } from './create-roadmap.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRoadmapDto extends PartialType(CreateRoadmapDto) {
@IsOptional()
@IsString()
 title?: string;
@IsOptional()
@IsString()
 domain?: string;
@IsOptional()
@IsString()
 description?: string;
}
