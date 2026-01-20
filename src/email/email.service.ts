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
        subject: `New Form Submission - ${submission.country} - ${submission.service}`,
        html: emailHtml,
      });
      console.log('Email notification sent successfully');
    } catch (error) {
      console.error('Failed to send email notification:', error);
      throw error;
    }
  }

  private generateSubmissionEmailTemplate(submission: CreateSubmissionDto & { id?: number }): string {
    const submissionDate = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
            padding: 20px;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #ffffff;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0;
          }
          .content {
            padding: 30px;
          }
          .greeting {
            font-size: 15px;
            color: #333333;
            margin-bottom: 20px;
          }
          .intro-text {
            font-size: 15px;
            color: #333333;
            margin-bottom: 25px;
            line-height: 1.6;
          }
          .info-box {
            background: #f8f9fa;
            border-left: 4px solid #ED0B73;
            padding: 20px;
            margin-bottom: 25px;
          }
          .info-row {
            display: flex;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .info-label {
            font-weight: 600;
            color: #495057;
            min-width: 140px;
            font-size: 14px;
          }
          .info-value {
            color: #212529;
            font-size: 14px;
            flex: 1;
          }
          .info-value a {
            color: #ED0B73;
            text-decoration: none;
          }
          .info-value a:hover {
            text-decoration: underline;
          }
          .closing-text {
            font-size: 14px;
            color: #666666;
            margin-top: 20px;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            font-size: 12px;
            color: #6c757d;
            border-top: 1px solid #e9ecef;
          }
          @media only screen and (max-width: 600px) {
            .info-row {
              flex-direction: column;
            }
            .info-label {
              margin-bottom: 4px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Lead Submission</h1>
          </div>
          
          <div class="content">
            <div class="greeting">Hello Team,</div>
            
            <div class="intro-text">
              A new lead has submitted the contact form for <strong>${submission.service}</strong> on <strong>${submissionDate}</strong>.
            </div>
            
            <div class="info-box">
              <div class="info-row">
                <div class="info-label">Full Name:</div>
                <div class="info-value">${submission.fullName} ${submission.lastName}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value"><a href="mailto:${submission.emailAddress}">${submission.emailAddress}</a></div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Phone:</div>
                <div class="info-value">${submission.phoneCountry} ${submission.phoneNumber}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Company:</div>
                <div class="info-value">${submission.companyName}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Service:</div>
                <div class="info-value">${submission.service}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Country:</div>
                <div class="info-value">${submission.country}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">Language:</div>
                <div class="info-value">${submission.language === 'en' ? 'English' : 'Arabic'}</div>
              </div>
              ${submission.id ? `
              <div class="info-row">
                <div class="info-label">Submission ID:</div>
                <div class="info-value">#${submission.id}</div>
              </div>
              ` : ''}
            </div>
            
            <div class="closing-text">
              Please follow up with this lead at your earliest convenience.
            </div>
          </div>
          
          <div class="footer">
            This is an automated notification from A2Z Media Landing Page System.<br>
            © ${new Date().getFullYear()} A2Z Media. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;
  }
}
