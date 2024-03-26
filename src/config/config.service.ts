import { config, DotenvParseOutput } from 'dotenv';
import { IConfigService } from './config.interface';
import { ERRORS } from '../constants';

export class ConfigService implements IConfigService {
   private config: DotenvParseOutput;
   constructor() {
      const { error, parsed } = config();
      if (error || !parsed) {
         throw new Error(ERRORS.INVALID_CONFIG);
      }

      this.config = parsed;
   }
   getOrThrow(key: string): string {
      const data = this.config[key];
      if (!data) {
         throw new Error(ERRORS.NO_KEY_FOUND);
      }
      return data;
   }
}
