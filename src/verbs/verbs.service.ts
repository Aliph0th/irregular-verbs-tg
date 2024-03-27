import { IVerbService } from './verbs.interface';
import verbs from '../data.json';

export class VerbsService implements IVerbService {
   getRandomVerb() {
      const index = Math.floor(Math.random() * this.VERBS.length);
      const forms = this.VERBS[index];
      return { forms, index };
   }
   get VERBS(): string[][] {
      return verbs;
   }
}
