import Root from "./PopularComic.svelte";

interface ComicMeta {
    title: string;
    author: string;
    type: "manga" | "manhwa" | "manhua";
    status: "ongoing" | "completed";
    release: Date;
    updatedOn: Date;
    genres: string[];
    synopsis: string;
}

type Props = {
    weeklyComics: ComicMeta[];
    monthlyComics: ComicMeta[];
    allTimeComics: ComicMeta[];
  }

export default Root;
export { Root, type Props };
