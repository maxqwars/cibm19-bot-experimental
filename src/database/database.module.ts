import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  exports: [PrismaService, UserService],
  providers: [PrismaService, UserService],
})
export class DatabaseModule {}
