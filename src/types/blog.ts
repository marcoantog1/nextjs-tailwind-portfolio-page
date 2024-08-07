import { SanityImageSource } from "@sanity/asset-utils";
import { PortableTextBlock } from "sanity";

export type Blog = {
  id: number;
  title: string;
  paragraph?: string;
  image?: SanityImageSource;
  publishedDate?: string;
  body: PortableTextBlock[];
};
