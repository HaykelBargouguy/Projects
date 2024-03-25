import { PartialType } from '@nestjs/mapped-types';
import { CreateRecommandedCourseDto } from './create-recommanded-course.dto';

export class UpdateRecommandedCourseDto extends PartialType(CreateRecommandedCourseDto) {}
