import { Telegraf } from 'telegraf';
import { IBot } from './bot.interface';
import { IConfigService } from '../config/config.interface';
import { Command } from '../command/command.class';
import { StartCommand } from '../command/start.command';

export class Bot implements IBot {
   private readonly bot: Telegraf;
   private readonly commands: Command[] = [];
   constructor(private readonly configService: IConfigService) {
      this.bot = new Telegraf(configService.getOrThrow('TOKEN'));
   }

   private addCommands() {
      this.commands.push(new StartCommand(this.bot));
   }

   launch() {
      this.addCommands();
      for (const command of this.commands) {
         command.handle();
      }
      this.bot.launch(() => console.log('Bot is running...'));
      process.once('SIGINT', () => this.bot.stop('SIGINT'));
      process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
   }
}
