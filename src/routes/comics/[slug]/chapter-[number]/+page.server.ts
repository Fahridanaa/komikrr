import type { PageServerLoad } from './$types';
import { getChapterImages, getComicChapters } from '$lib/utils/cloudinary';

export const load: PageServerLoad = async ({ params }) => {
  const { slug, number } = params;

  const images = await getChapterImages(slug, number);
  const totalChapters = (await getComicChapters(slug)).length;

  return {
    images,
    chapterNumber: number,
    comicSlug: slug,
    totalChapters
  };
};
