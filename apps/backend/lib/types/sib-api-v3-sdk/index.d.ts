// Type definitions for sib-api-v3-sdk
//moved to fetch api for now for this we have some dependency issues
declare module 'sib-api-v3-sdk' {
  export interface SendSmtpEmail {
    to?: { email: string; name?: string }[];
    subject?: string;
    htmlContent?: string;
    textContent?: string;
    sender?: { email: string; name?: string };
  }

  export interface CreateSmtpEmail {
    messageId: string;
  }

  export class TransactionalEmailsApi {
    authentications: any;
    sendTransacEmail(sendSmtpEmail: SendSmtpEmail, options?: any): Promise<{ response: any; body: CreateSmtpEmail }>;
  }

  export class ApiClient {
    static instance: ApiClient;
    authentications: {
      'api-key': {
        apiKey: string;
      };
    };
  }
}
