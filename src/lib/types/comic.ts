export type ComicType = 'manga' | 'manhwa' | 'manhua';
export type ComicStatus = 'ongoing' | 'completed';

export interface Comic {
  id: number;
  slug: string;
  title: string;
  author: string;
  type: ComicType;
  status: ComicStatus;
  release: string;
  updatedOn: Date;
  genres: string[];
  synopsis: string;
  coverImageUrl: string;
  rating: string | null;
}
