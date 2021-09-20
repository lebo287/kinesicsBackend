import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {

    constructor(private readonly mailService: MailService){}

    @Post()
    sendMail(@Body() mail: any): any {
        return this.mailService.sendMail(mail).then(res => {
            return 'Email sent'
        }).catch(err => {
            return err.message;
        })
    }
}
