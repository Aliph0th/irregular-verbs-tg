export interface IVerbService {
   getRandomVerb(): { forms: string[]; index: number };
   get VERBS(): string[][];
}
