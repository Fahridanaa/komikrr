import { getComicChapters } from '$lib/utils/cloudinary';
// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { comics } from '$lib/server/db/schema';
import type { Comic } from '$lib/types/comic';

export const load: PageServerLoad = async () => {
  try {
    const comicsData = await db.select().from(comics).limit(10) as Comic[];

    const parsedComics = await Promise.all(comicsData.map(async c => ({
      ...c,
      genres: Array.isArray(c.genres) ? c.genres : JSON.parse(c.genres as string),
      twoLatestChapter: (await getComicChapters(c.slug)).slice(-2)
    })));

    const featuredComics = parsedComics.slice(0, 3);
    const popularComics = parsedComics.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0)).slice(0, 10);
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
