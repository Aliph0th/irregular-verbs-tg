import verbs from '../data.json';
export const VERBS = verbs;

export const getRandomVerbIndex = () => Math.floor(Math.random() * VERBS.length);
