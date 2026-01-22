import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RecaptchaService {
  private readonly secretKey: string;
  private readonly isEnabled: boolean;

  constructor() {
    this.secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    this.isEnabled = !!this.secretKey;
  }

  async verifyToken(token: string): Promise<boolean> {
    if (!this.isEnabled) {
      return true;
    }

    if (!token) {
      throw new BadRequestException('reCAPTCHA token is required');
    }

    try {
      const response = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: this.secretKey,
            response: token,
          },
        },
      );

      if (!response.data.success) {
        throw new BadRequestException('reCAPTCHA verification failed');
      }

      return true;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error('reCAPTCHA verification error:', error);
      throw new BadRequestException('reCAPTCHA verification failed');
    }
  }

  isRecaptchaEnabled(): boolean {
    return this.isEnabled;
  }
}
