import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMilestoneDto {
    @IsNotEmpty()
    @IsString()
    id:string
    @IsNotEmpty()
    @IsString()
    roadmapId:string
    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    description:string
    @IsNotEmpty()
    @IsNumber()
    orderNumber:number

}
