import Root from "./PopularList.svelte";

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
    comics: ComicMeta[];
}

export default Root;
export { Root, type Props };
