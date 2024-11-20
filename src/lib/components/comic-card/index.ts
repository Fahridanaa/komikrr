import Root from "./ComicCard.svelte";

interface Chapter {
  number: number;
  timeAgo: string;
  href: string;
}

interface Comic {
  title: string;
  type: string;
  coverImage: string;
  href: string;
  chapters: Chapter[];
}

type Props = {
  comic: Comic;
};

export default Root;
export { Root, type Props };
