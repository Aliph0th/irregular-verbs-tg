import { Telegraf } from 'telegraf';

export abstract class Command {
   constructor(protected readonly bot: Telegraf) {}
   abstract handle(): void;
}
