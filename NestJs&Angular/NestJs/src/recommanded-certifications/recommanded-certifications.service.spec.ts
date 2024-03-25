import { Test, TestingModule } from '@nestjs/testing';
import { RecommandedCertificationsService } from './recommanded-certifications.service';

describe('RecommandedCertificationsService', () => {
  let service: RecommandedCertificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecommandedCertificationsService],
    }).compile();

    service = module.get<RecommandedCertificationsService>(RecommandedCertificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
