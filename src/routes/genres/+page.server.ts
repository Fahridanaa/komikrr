// src/routes/genres/+page.server.ts
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { genres } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
  try {
    const genresData = await db.select().from(genres);
    return {
      genres: genresData
    };
  } catch (error) {
    console.error('Error fetching genres:', error);
    return {
      genres: []
    };
  }
};
