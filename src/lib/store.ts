import { writable } from 'svelte/store';

export const cacheArticleStore = writable(new Map());
