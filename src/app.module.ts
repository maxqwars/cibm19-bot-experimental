import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { cwd } from 'process';
import { VkontakteModule } from './vkontakte/vkontakte.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(cwd(), '.env'),
    }),
    TelegramModule,
    VkontakteModule, // VK GOVNO
  ],
})
export class AppModule {}
