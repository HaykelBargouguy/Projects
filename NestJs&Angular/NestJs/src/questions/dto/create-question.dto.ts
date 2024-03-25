  import { ArrayMaxSize, ArrayMinSize, IsArray, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, Length, Max, Min } from "class-validator";

  export class CreateQuestionDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsArray()
    @ArrayMinSize(4, { message: "A question must have exactly 4 options." })
    @ArrayMaxSize(4, { message: "A question must have exactly 4 options." })
    @IsString({ each: true })
    options: string[];

    @IsInt()
    @IsNotEmpty()
    @Min(0, { message: "Correct option index must be >= -1." })
    @Max(3, { message: "Correct option index must be <= 3." })  
    correctOption: number;

    @IsString()
    @IsNotEmpty()
    testQuizId: string;

    
  }
