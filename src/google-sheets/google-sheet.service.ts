import { Injectable, Logger } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class GoogleSheetService {
  private readonly logger = new Logger(GoogleSheetService.name);

  async syncSubmission(data: any) {
    const webhookUrl = process.env.N8N_WEBHOOK_URL || "https://n8n.techlab-staging.solutions/webhook-test/sheet";

    if (!webhookUrl) {
      this.logger.warn("N8N_WEBHOOK_URL is not defined in env variables");
      return;
    }

    try {
      (await axios.post(webhookUrl, data, {
        headers: {
          "Content-Type": "application/json",
          // Optional: If you enabled Header Auth in n8n
          // 'x-api-key': this.configService.get('N8N_API_KEY'),
        },
        timeout: 5000, // Don't hang forever if n8n is down
      }),
        this.logger.log(`Submission synced to n8n successfully.`));
    } catch (error) {
      // Log the error but do not throw it, so the submission service continues
      this.logger.error(
        `Failed to sync to n8n: ${error.message}`,
        error.response?.data,
      );
    }
  }
}
