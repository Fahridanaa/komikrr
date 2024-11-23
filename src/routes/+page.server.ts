import { getComicChapters } from '$lib/utils/cloudinary';
// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { comic } from '$lib/server/db/schema';
import type { Comic } from '$lib/types/comic';

export const load: PageServerLoad = async () => {
  try {
    const comics = await db.select().from(comic).limit(10) as Comic[];

    const parsedComics = await Promise.all(comics.map(async c => ({
      ...c,
      release: c.release instanceof Date ? c.release : new Date(c.release),
      updatedOn: c.updatedOn instanceof Date ? c.updatedOn : new Date(c.updatedOn),
      genres: Array.isArray(c.genres) ? c.genres : JSON.parse(c.genres as string),
      twoLatestChapter: (await getComicChapters(c.slug)).slice(-2)
    })));

    const featuredComics = parsedComics.slice(0, 3);
    const popularComics = parsedComics.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 10);
    const latestUpdates = parsedComics.sort((a, b) => b.updatedOn.getTime() - a.updatedOn.getTime()).slice(0, 10);

    return {
      featuredComics,
      popularComics,
      latestUpdates,
      weeklyComics: popularComics.slice(0, 10),
      monthlyComics: popularComics.slice(0, 10),
      allTimeComics: popularComics.slice(0, 10)
    };
  } catch (error) {
    console.error('Error fetching comics:', error);
    return {
      featuredComics: [],
      popularComics: [],
      latestUpdates: [],
      weeklyComics: [],
      monthlyComics: [],
      allTimeComics: []
    };
  }
};
