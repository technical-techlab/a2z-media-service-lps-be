# Email Configuration Guide

This guide will help you set up email notifications for form submissions.

## Overview

When a user submits the contact form, an email notification is automatically sent to the admin email address with all the submission details.

## Configuration

### 1. Update Environment Variables

Copy the email configuration from `.env.example` to your `.env` file and update with your actual credentials:

```env
# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
ADMIN_EMAIL="admin@a2zmedia.com"
EMAIL_FROM="noreply@a2zmedia.com"
```

### 2. Email Provider Setup

#### Using Gmail

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this as `SMTP_PASS` in your `.env` file

3. **Configuration**:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER="your-gmail@gmail.com"
   SMTP_PASS="your-16-char-app-password"
   ```

#### Using Other Providers

**Outlook/Office 365:**
```env
SMTP_HOST="smtp.office365.com"
SMTP_PORT=587
SMTP_SECURE=false
```

**SendGrid:**
```env
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="apikey"
SMTP_PASS="your-sendgrid-api-key"
```

**Mailgun:**
```env
SMTP_HOST="smtp.mailgun.org"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="postmaster@your-domain.mailgun.org"
SMTP_PASS="your-mailgun-password"
```

**AWS SES:**
```env
SMTP_HOST="email-smtp.us-east-1.amazonaws.com"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="your-aws-smtp-username"
SMTP_PASS="your-aws-smtp-password"
```

### 3. Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port (usually 587 for TLS or 465 for SSL) | `587` |
| `SMTP_SECURE` | Use SSL (true) or TLS (false) | `false` |
| `SMTP_USER` | Email account username | `your-email@gmail.com` |
| `SMTP_PASS` | Email account password or app password | `your-app-password` |
| `ADMIN_EMAIL` | Email address to receive notifications | `admin@a2zmedia.com` |
| `EMAIL_FROM` | Sender email address shown in notifications | `noreply@a2zmedia.com` |

## Email Template

The email notification includes:
- **Submission ID**: Unique identifier for the submission
- **Full Name**: First and last name
- **Email Address**: Clickable mailto link
- **Phone Number**: With country code
- **Company Name**: Company/organization name
- **Service**: Selected service (hardcoded)
- **Country**: Country from which the form was submitted
- **Language**: Form language (English/Arabic)

## Testing

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Start the Backend

```bash
npm run start:dev
```

### 3. Submit a Test Form

Visit your frontend and submit the contact form. Check:
- ✅ Form submission succeeds
- ✅ Data is saved to database
- ✅ Email is received at admin email address
- ✅ Email contains all submission details

### 4. Check Logs

If email fails, check the backend console for error messages:
```
Failed to send email notification: [error details]
```

## Troubleshooting

### Email Not Sending

1. **Check environment variables** are set correctly in `.env`
2. **Verify SMTP credentials** are valid
3. **Check firewall/network** allows outbound SMTP connections
4. **Review backend logs** for specific error messages

### Gmail "Less Secure Apps" Error

- Gmail no longer supports "less secure apps"
- You **must** use an App Password (see Gmail setup above)
- Regular password will not work

### Email Goes to Spam

- Configure SPF, DKIM, and DMARC records for your domain
- Use a verified sender email address
- Consider using a dedicated email service (SendGrid, Mailgun, etc.)

### Port Issues

- Port 587 (TLS): Most common, usually works
- Port 465 (SSL): Set `SMTP_SECURE=true`
- Port 25: Often blocked by ISPs

## Production Recommendations

1. **Use a dedicated email service** (SendGrid, Mailgun, AWS SES)
2. **Set up proper DNS records** (SPF, DKIM, DMARC)
3. **Monitor email delivery** and bounce rates
4. **Implement retry logic** for failed emails
5. **Add email queue** for high-volume submissions
6. **Use environment-specific configs** (dev/staging/prod)

## Security Best Practices

- ✅ Never commit `.env` file to version control
- ✅ Use app passwords instead of account passwords
- ✅ Rotate credentials regularly
- ✅ Use environment-specific email addresses
- ✅ Implement rate limiting on form submissions
- ✅ Validate email addresses before sending

## Support

For issues or questions:
- Check the backend logs: `npm run start:dev`
- Review SMTP provider documentation
- Test SMTP connection using a tool like Telnet or SMTP testing service
