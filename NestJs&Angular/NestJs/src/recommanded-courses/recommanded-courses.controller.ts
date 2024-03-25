import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecommandedCoursesService } from './recommanded-courses.service';
import { CreateRecommandedCourseDto } from './dto/create-recommanded-course.dto';
import { UpdateRecommandedCourseDto } from './dto/update-recommanded-course.dto';

@Controller('recommanded-courses')
export class RecommandedCoursesController {
  constructor(private readonly recommandedCoursesService: RecommandedCoursesService) {}

  @Post()
  create(@Body() createRecommandedCourseDto: CreateRecommandedCourseDto) {
    return this.recommandedCoursesService.create(createRecommandedCourseDto);
  }

  @Get()
  findAll() {
    return this.recommandedCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommandedCoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecommandedCourseDto: UpdateRecommandedCourseDto) {
    return this.recommandedCoursesService.update(+id, updateRecommandedCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommandedCoursesService.remove(+id);
  }
}
