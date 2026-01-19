import { Module } from '@nestjs/common';
import { SubmissionsModule } from './submissions/submissions.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmailModule } from './email/email.module';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [PrismaModule, EmailModule, SubmissionsModule, TranslationsModule],
})
export class AppModule {}
