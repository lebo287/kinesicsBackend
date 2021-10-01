import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

   sendMail(body: any): Promise<any> {
     
    return this.mailerService
      .sendMail({
        to: body.to, // list of receivers
        subject: body.subject, // Subject line
        text: body.text, // plaintext body
        html: `<b>${body.text}</b>`, // HTML body content
      })
  }
}


