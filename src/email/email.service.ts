import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CreateSubmissionDto } from '../submissions/dto/create-submission.dto';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendSubmissionNotification(submission: CreateSubmissionDto & { id?: number }) {
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.EMAIL_FROM;

    if (!adminEmail || !fromEmail) {
      console.error('Email configuration missing: ADMIN_EMAIL or EMAIL_FROM not set');
      return;
    }

    const emailHtml = this.generateSubmissionEmailTemplate(submission);

    try {
      await this.transporter.sendMail({
        from: fromEmail,
        to: adminEmail,
        subject: `New Form Submission - ${submission.country}`,
        html: emailHtml,
      });
      console.log('Email notification sent successfully');
    } catch (error) {
      console.error('Failed to send email notification:', error);
      throw error;
    }
  }

  private generateSubmissionEmailTemplate(submission: CreateSubmissionDto & { id?: number }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #ED0B73 0%, #F35CA1 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #ED0B73;
          }
          .field-label {
            font-weight: bold;
            color: #ED0B73;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
          .field-value {
            font-size: 16px;
            color: #333;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #ddd;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎉 New Form Submission</h1>
          <p>A2Z Media Landing Page</p>
        </div>
        <div class="content">
          ${submission.id ? `
          <div class="field">
            <div class="field-label">Submission ID</div>
            <div class="field-value">#${submission.id}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${submission.fullName} ${submission.lastName}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${submission.emailAddress}">${submission.emailAddress}</a></div>
          </div>
          
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${submission.phoneCountry} ${submission.phoneNumber}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Company Name</div>
            <div class="field-value">${submission.companyName}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Service</div>
            <div class="field-value">${submission.service}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Country</div>
            <div class="field-value">${submission.country}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Language</div>
            <div class="field-value">${submission.language === 'en' ? 'English' : 'Arabic'}</div>
          </div>
        </div>
        <div class="footer">
          <p>This is an automated notification from A2Z Media Landing Page</p>
          <p>© ${new Date().getFullYear()} A2Z Media. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;
  }
}
