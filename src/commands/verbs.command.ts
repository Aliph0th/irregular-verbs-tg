import { Telegraf } from 'telegraf';
import { Command } from './command.class';
import { COMMANDS, MESSAGES, NEXT, SHOW } from '../constants';
import { revealedVerbKeyboard, verbKeyboard } from '../keyboards';
import { CallbackQuery } from 'telegraf/typings/core/types/typegram';
import { IVerbService } from '../verbs/verbs.interface';

export class VerbsCommand extends Command {
   constructor(
      protected readonly bot: Telegraf,
      private readonly verbsService: IVerbService
   ) {
      super(bot);
   }

   handle() {
      this.bot.command(COMMANDS.VERBS, async ctx => {
         const { forms, index } = this.verbsService.getRandomVerb();
         await ctx.replyWithHTML(MESSAGES.VERBS(forms[0]), verbKeyboard(index));
      });

      this.bot.action(new RegExp(`^${SHOW}_\\d+$`), async ctx => {
         const index = +(ctx.update.callback_query as CallbackQuery.DataQuery).data.split(
            '_'
         )[1];
         await ctx.editMessageText(MESSAGES.VERBS(...this.verbsService.VERBS[index]), {
            parse_mode: 'HTML',
            reply_markup: revealedVerbKeyboard()
         });
         await ctx.answerCbQuery();
      });

      this.bot.action(NEXT, async ctx => {
         const { forms, index } = this.verbsService.getRandomVerb();
         await ctx.editMessageText(MESSAGES.VERBS(forms[0]), {
            parse_mode: 'HTML',
            reply_markup: verbKeyboard(index).reply_markup
         });
         await ctx.answerCbQuery();
      });
   }
}
