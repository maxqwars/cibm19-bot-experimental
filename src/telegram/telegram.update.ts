import { Inject } from '@nestjs/common';
import { Update } from 'nestjs-telegraf';
import { InjectBot } from 'nestjs-telegraf';
import { UserService } from 'src/database/user.service';
import { Context, Telegraf } from 'telegraf';

@Update()
export class TelegramUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    @Inject(UserService) private readonly user: UserService,
  ) {}
}
