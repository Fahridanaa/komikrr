export type ComicType = 'manga' | 'manhwa' | 'manhua';
export type ComicStatus = 'ongoing' | 'completed';

export interface Comic {
  id: number;
  title: string;
  author: string;
  type: ComicType;
  status: ComicStatus;
  release: Date;
  updatedOn: Date;
  genres: string[];
  synopsis: string;
  coverImageUrl: string;
  rating: number | null;
}
