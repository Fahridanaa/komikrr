import Root from "./ComicCarousel.svelte";

interface Comic {
    title: string;
    rating: number;
    type: string;
    genres: string[];
    synopsis: string;
    status: string;
    author: string;
    coverImage: string;
}

type Props = {
    comic: Comic;
};

export default Root;
export { Root, type Props };
