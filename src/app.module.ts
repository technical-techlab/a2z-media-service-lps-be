import { Module } from '@nestjs/common';
import { SubmissionsModule } from './submissions/submissions.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [PrismaModule, EmailModule, SubmissionsModule],
})
export class AppModule {}
