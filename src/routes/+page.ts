// src/routes/+page.ts
import type { PageLoad } from './$types';
import type { Comic } from '$lib/types/comic';

export interface PageData {
  featuredComics: Comic[];
  popularComics: Comic[];
  latestUpdates: Comic[];
  weeklyComics: Comic[];
  monthlyComics: Comic[];
  allTimeComics: Comic[];
}

export const load: PageLoad = async ({ data }) => {
  return data as unknown as PageData;
};
