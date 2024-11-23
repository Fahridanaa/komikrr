// src/routes/projects/+page.server.ts
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { comics } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
  try {
    const comicsData = await db.select().from(comics).orderBy(comics.updatedOn);

    return {
      comicsData: comicsData.map(c => ({
        ...c,
        updatedOn: new Date(c.updatedOn),
        genres: Array.isArray(c.genres) ? c.genres : JSON.parse(c.genres as string)
      }))
    };
  } catch (error) {
    console.error('Error fetching comics:', error);
    return { comicsData: [] };
  }
};
