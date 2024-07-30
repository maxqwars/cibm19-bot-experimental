import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VkModule } from 'nestjs-vk';
import { VkontakteUpdate } from './vkontakte.update';
import { MainMiddleware } from './main.middleware';
import { MiddlewareModule } from './middleware.module';
import { SimpleScene } from './simple.scene';

@Module({
  imports: [
    ConfigModule,
    MiddlewareModule,
    VkModule.forManagers({
      useSessionManager: false,
      useSceneManager: false,
      useHearManager: false,
    }),
    VkModule.forRootAsync({
      imports: [ConfigModule, MiddlewareModule],
      inject: [ConfigService, MainMiddleware],
      useFactory: async (
        configService: ConfigService,
        mainMiddleware: MainMiddleware,
      ) => ({
        token: configService.get<string>('VK_GROUP_TOKEN'),
        options: {
          pollingGroupId: configService.get<number>('VK_BOT_GROUP_ID'),
          apiMode: 'sequential',
        },
        middlewaresBefore: [mainMiddleware.middlewaresBefore],
        middlewaresAfter: [mainMiddleware.middlewaresAfter],
      }),
    }),
  ],
  providers: [VkontakteUpdate, MainMiddleware, SimpleScene],
  exports: [MainMiddleware],
})
export class VkontakteModule {}
