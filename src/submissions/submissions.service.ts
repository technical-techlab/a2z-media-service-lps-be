import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { RecaptchaService } from '../recaptcha/recaptcha.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class SubmissionsService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
    private recaptchaService: RecaptchaService,
  ) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    if (this.recaptchaService.isRecaptchaEnabled()) {
      await this.recaptchaService.verifyToken(
        createSubmissionDto.recaptchaToken,
      );
    }

    const { recaptchaToken, ...submissionData } = createSubmissionDto;
    
    const submission = await this.prisma.submission.create({
      data: submissionData,
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
