import { Telegraf } from 'telegraf';
import { Command } from './command.class';

export class StartCommand extends Command {
   constructor(protected readonly bot: Telegraf) {
      super(bot);
   }

   handle() {
      this.bot.start(async ctx => {
         await ctx.reply('ok');
      });
   }
}
