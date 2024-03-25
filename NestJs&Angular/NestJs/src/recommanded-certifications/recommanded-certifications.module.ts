import { Module } from '@nestjs/common';
import { RecommandedCertificationsService } from './recommanded-certifications.service';
import { RecommandedCertificationsController } from './recommanded-certifications.controller';

@Module({
  controllers: [RecommandedCertificationsController],
  providers: [RecommandedCertificationsService],
})
export class RecommandedCertificationsModule {}
