import { PartialType } from '@nestjs/mapped-types';
import { CreateTestQuizDto } from './create-test-quiz.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTestQuizDto extends PartialType(CreateTestQuizDto) {
    @IsOptional()
    @IsString()
    title?: string;
}
