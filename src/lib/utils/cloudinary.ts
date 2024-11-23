import { v2 as cloudinary } from 'cloudinary';
import { env } from '$env/dynamic/private';

cloudinary.config({
  cloud_name: env.CLOUDINARY_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_SECRET_KEY
});

export async function getChapterImages(slug: string, chapterNumber: string) {
  const folderPath = `${slug}/chapter-${chapterNumber}`;

  try {
    const searchResult = await cloudinary.search
      .expression(`folder:${folderPath}`)
      .sort_by('public_id', 'asc')
      .max_results(100)
      .execute();

    return searchResult.resources.map((resource: { secure_url: string; public_id: string; width: string; height: string; }) => ({
      url: resource.secure_url,
      publicId: resource.public_id,
      width: resource.width,
      height: resource.height,
    }))
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

export async function getComicChapters(slug: string) {
  try {
    const foldersResult = await cloudinary.api.sub_folders(slug);

    const chapters = foldersResult.folders
      .filter((folder: { name: string; }) => folder.name.startsWith('chapter-'))
      .map((folder: { name: string; }) => {
        const chapterNumber = folder.name.split('-')[1];
        return `Chapter ${chapterNumber}`;
      })
      .sort((a: string, b: string) => {
        const numA = parseInt(a.split(' ')[1]);
        const numB = parseInt(b.split(' ')[1]);
        return numA - numB;
    });

    return chapters;
  } catch (error) {
    console.error('Error fetching comic info from Cloudinary:', error);
    return [];
  }
}
