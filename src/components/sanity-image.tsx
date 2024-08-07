"use client";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "next-sanity";
import sanityConfig from "@/configs/sanityConfig";


interface Props extends Omit<ImageProps, "src"> {
  src: SanityImageSource;
  className?: string;
}

export const SanityImage = ({ src, alt, ...props }: Props) => {
  const imageProps = useNextSanityImage(createClient(sanityConfig), src);

  if (!imageProps) return null;

  return <Image src={imageProps.src} loader={imageProps.loader} {...props} alt={alt} />;
};