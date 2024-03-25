import { IsNotEmpty, IsString } from "class-validator";

export class CreateTestQuizDto  {
        @IsNotEmpty()
        @IsString()
        title: string;
          


    
}
