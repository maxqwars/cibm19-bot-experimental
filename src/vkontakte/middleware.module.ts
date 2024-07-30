import { Module } from '@nestjs/common';
import { MainMiddleware } from './main.middleware';
import { VkModule } from 'nestjs-vk';

@Module({
  imports: [
    VkModule.forManagers({
      useSessionManager: false,
      useSceneManager: false,
      useHearManager: false,
    }),
  ],
  providers: [MainMiddleware],
  exports: [MainMiddleware],
})
export class MiddlewareModule {}
