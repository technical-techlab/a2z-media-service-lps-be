import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    const submission = await this.prisma.submission.create({
      data: createSubmissionDto,
    });

    // Send email notification to admin
    try {
      await this.emailService.sendSubmissionNotification({
        ...createSubmissionDto,
        id: submission.id,
      });
    } catch (error) {
      console.error('Failed to send email notification:', error);
      // Don't fail the submission if email fails
    }

    return submission;
  }

  async findAll() {
    return this.prisma.submission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.submission.findUnique({
      where: { id },
    });
  }
}
