// src/routes/projects/+page.server.ts
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { comic } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
  try {
    const comics = await db.select().from(comic).orderBy(comic.updatedOn);

    return {
      comics: comics.map(c => ({
        ...c,
        release: new Date(c.release),
        updatedOn: new Date(c.updatedOn),
        genres: Array.isArray(c.genres) ? c.genres : JSON.parse(c.genres as string)
      }))
    };
  } catch (error) {
    console.error('Error fetching comics:', error);
    return { comics: [] };
  }
};
