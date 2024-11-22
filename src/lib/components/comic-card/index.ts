import Root from "./ComicCard.svelte";

interface Comic {
  title: string;
  type: string;
  href: string;
}

type Props = {
  comic: Comic;
};

export default Root;
export { Root, type Props };
