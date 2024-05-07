import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { resolve } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailService } from './mail.service';

@Module({
  imports: [
    ConfigModule, // Import ConfigModule to use ConfigService
    MailerModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule here as well
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get<string>('MAILER_HOST'),
          secure: false,
          auth: {
            user: config.get<string>('MAILDEV_USER'),
            pass: config.get<string>('MAILDEV_PASS'),
          },
        },
        defaults: {
          from: `"Exam" <${config.get('MAILER_HOST')}>`,
        },
        template: {
          dir: resolve(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          template: 'confirmation',
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
