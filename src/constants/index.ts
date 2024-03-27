export const ERRORS = {
   INVALID_CONFIG: 'Invalid .env file',
   NO_KEY_FOUND: 'Key was not found in config'
};
export const MESSAGES = {
   START: (name: string) =>
      `<i>Hello, ${name}</i>👋\nTo start your training, use /verbs command`,
   VERBS: (...verbs: string[]) => {
      const forms = verbs.map(v => `<u>${v}</u>`);
      return `Verb${verbs.length > 1 ? 's' : ''}: <b>${forms.join(' ')}</b>`;
   }
};
export const COMMANDS = {
   VERBS: 'verbs'
};
export const SHOW = 'show';
export const NEXT = 'next';
