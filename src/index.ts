import { Bot } from './bot/bot.module';
import { ConfigService } from './config/config.service';

const configService = new ConfigService();
const bot = new Bot(configService);

bot.launch();
