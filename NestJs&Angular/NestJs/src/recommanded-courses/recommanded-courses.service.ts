import { Injectable } from '@nestjs/common';
import { CreateRecommandedCourseDto } from './dto/create-recommanded-course.dto';
import { UpdateRecommandedCourseDto } from './dto/update-recommanded-course.dto';

@Injectable()
export class RecommandedCoursesService {
  create(createRecommandedCourseDto: CreateRecommandedCourseDto) {
    return 'This action adds a new recommandedCourse';
  }

  findAll() {
    return `This action returns all recommandedCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recommandedCourse`;
  }

  update(id: number, updateRecommandedCourseDto: UpdateRecommandedCourseDto) {
    return `This action updates a #${id} recommandedCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommandedCourse`;
  }
}
