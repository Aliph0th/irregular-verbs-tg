import { Markup } from 'telegraf';
import { NEXT, SHOW } from '../constants';

export const verbKeyboard = (index: number) =>
   Markup.inlineKeyboard([
      [Markup.button.callback('Show all', `${SHOW}_${index}`)],
      [Markup.button.callback('Next', NEXT)]
   ]);
export const revealedVerbKeyboard = () =>
   Markup.inlineKeyboard([[Markup.button.callback('Next', NEXT)]]).reply_markup;
