// src/routes/comics/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { comic } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
  try {
    // Fetch the comic from the database using the slug
    const result = await db.select().from(comic).where(eq(comic.slug, params.slug)).limit(1);

    if (result.length === 0) {
      throw error(404, 'Comic not found');
    }

    const comicData = result[0];

    // Transform the data if needed (e.g., parsing dates, JSON fields)
    return {
      comic: {
        ...comicData,
        genres: Array.isArray(comicData.genres) ? comicData.genres : JSON.parse(comicData.genres as string),
        release: new Date(comicData.release),
        updatedOn: new Date(comicData.updatedOn)
      }
    };
  } catch (err) {
    console.error('Error fetching comic:', err);
    throw error(500, 'Internal Server Error');
  }
};
