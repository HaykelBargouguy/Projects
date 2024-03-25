import { Test, TestingModule } from '@nestjs/testing';
import { RecommandedCoursesController } from './recommanded-courses.controller';
import { RecommandedCoursesService } from './recommanded-courses.service';

describe('RecommandedCoursesController', () => {
  let controller: RecommandedCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommandedCoursesController],
      providers: [RecommandedCoursesService],
    }).compile();

    controller = module.get<RecommandedCoursesController>(RecommandedCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
