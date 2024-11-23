// src/routes/comics/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { comics } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { getComicChapters } from '$lib/utils/cloudinary';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const { slug } = params;

    const result = await db.select().from(comics).where(eq(comics.slug, slug)).limit(1);

    if (result.length === 0) {
      throw error(404, 'Comic not found');
    }

    const comicData = result[0];

    const comicChapters = await getComicChapters(slug);

    return {
      comic: {
        ...comicData,
        genres: Array.isArray(comicData.genres) ? comicData.genres : JSON.parse(comicData.genres as string),
        release: new Date(comicData.release),
        updatedOn: new Date(comicData.updatedOn)
      },
      comicChapters
    };
  } catch (err) {
    console.error('Error fetching comic:', err);
    throw error(500, 'Internal Server Error');
  }
};
