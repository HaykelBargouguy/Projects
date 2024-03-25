import { Test, TestingModule } from '@nestjs/testing';
import { RecommandedCertificationsController } from './recommanded-certifications.controller';
import { RecommandedCertificationsService } from './recommanded-certifications.service';

describe('RecommandedCertificationsController', () => {
  let controller: RecommandedCertificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecommandedCertificationsController],
      providers: [RecommandedCertificationsService],
    }).compile();

    controller = module.get<RecommandedCertificationsController>(RecommandedCertificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
