// Type definitions for sib-api-v3-sdk
// Project: https://github.com/sendinblue/APIv3-typescript-library
// Definitions by: Your Name <your.email@example.com>

declare module 'sib-api-v3-sdk' {
  export interface SendSmtpEmail {
    to?: { email: string; name?: string }[];
    subject?: string;
    htmlContent?: string;
    textContent?: string;
    sender?: { email: string; name?: string };
    // Add other properties as needed
  }

  export interface CreateSmtpEmail {
    messageId: string;
  }

  export class TransactionalEmailsApi {
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail, options?: any): Promise<{ response: any; body: CreateSmtpEmail }>;
    // Add other methods as needed
  }

  export class ApiClient {
    static instance: ApiClient;
    authentications: {
      'api-key': {
        apiKey: string;
      };
    };
  }

  // Add other classes and interfaces as needed
}
