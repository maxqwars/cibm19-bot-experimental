import { Ctx, Update, Hears, InjectVkApi } from 'nestjs-vk';
import { MessageContext, VK } from 'vk-io';
import { SIMPLE_SCENE } from './simple.scene';

@Update()
export class VkontakteUpdate {
  constructor(
    @InjectVkApi()
    private readonly vk: VK,
  ) {}

  @Hears(/^\/?(start|старт)$/i)
  async onStartCommand(@Ctx() ctx: MessageContext) {
    await ctx.reply('Welcome');
  }

  @Hears('hi')
  async hearsHi(@Ctx() ctx: MessageContext) {
    return 'Hey there';
  }

  @Hears(/scene( ?(?<state>[0-9]+))?$/i)
  async hearsScene(@Ctx() ctx: MessageContext) {
    const stateNumber = ((e) => (isNaN(Number(e)) ? null : Number(e)))(
      ctx.$match?.groups?.state,
    );
    ctx.scene.enter(SIMPLE_SCENE, { state: { stateNumber } });
  }
}
