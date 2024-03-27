import { Telegraf } from 'telegraf';
import { Command } from './command.class';
import { COMMANDS, MESSAGES, SHOW } from '../constants';
import { revealedVerbKeyboard, verbKeyboard } from '../keyboards';
import { getRandomVerbIndex, VERBS } from '../verbs';
import { CallbackQuery } from 'telegraf/typings/core/types/typegram';

export class VerbsCommand extends Command {
   constructor(protected readonly bot: Telegraf) {
      super(bot);
   }

   handle() {
      this.bot.command(COMMANDS.VERBS, async ctx => {
         const index = getRandomVerbIndex();
         const verb = VERBS[index][0];
         await ctx.replyWithHTML(MESSAGES.VERBS(verb), verbKeyboard(index));
      });

      this.bot.action(new RegExp(`^${SHOW}_\\d+$`), async ctx => {
         const index = +(ctx.update.callback_query as CallbackQuery.DataQuery).data.split(
            '_'
         )[1];
         await ctx.editMessageText(MESSAGES.VERBS(...VERBS[index]), {
            parse_mode: 'HTML',
            reply_markup: revealedVerbKeyboard()
         });
      });
   }
}
