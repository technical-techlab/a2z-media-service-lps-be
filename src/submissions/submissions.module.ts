import { Module } from '@nestjs/common';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';
import { EmailModule } from '../email/email.module';
import { RecaptchaModule } from '../recaptcha/recaptcha.module';

@Module({
  imports: [EmailModule, RecaptchaModule],
  controllers: [SubmissionsController],
  providers: [SubmissionsService],
})
export class SubmissionsModule {}
