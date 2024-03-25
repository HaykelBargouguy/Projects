import { Test, TestingModule } from '@nestjs/testing';
import { RecommandedCoursesService } from './recommanded-courses.service';

describe('RecommandedCoursesService', () => {
  let service: RecommandedCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommandedCoursesService],
    }).compile();

    service = module.get<RecommandedCoursesService>(RecommandedCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
