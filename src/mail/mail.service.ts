import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Admin } from '../admin/entities/admin.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(admin: Admin) {
    console.log(admin);
    
    const url = `${process.env.API_HOST}:${process.env.PORT}/api/admin/activate/${admin.activation_link}`;
    const full_name=admin.full_name
    const email=admin.email


    console.log(admin);


    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to kindergarden app! Confirmation your email',
      template: './confirmation',
      context: {
        name:full_name,
        url,
      },
    });
  }
}
