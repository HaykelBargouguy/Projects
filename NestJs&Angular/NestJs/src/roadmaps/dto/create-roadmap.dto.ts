// create-roadmap.dto.ts

import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoadmapDto {
@IsNotEmpty()
@IsString()
 id:string;
@IsNotEmpty()
@IsString()
 title: string;
@IsNotEmpty()
@IsString()
 domain: string;
@IsNotEmpty()
@IsString()
 description: string;
}
