import { ImageProps } from "next/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityImage } from "./sanity-image";
import { PortableTextBlock } from "sanity";
import { PortableText } from "next-sanity";
interface Props {
image:SanityImageSource | undefined
title:string
body:PortableTextBlock[]
date:string
paragraph:string | undefined
}

export function BlogPost({image, title, body, paragraph, date}:Props) {
  return (
    <div>
        <h1>{title}</h1>
        <SanityImage src={image!} alt="postImage" height={100} width={100}/>
        <p>{paragraph}</p>
        <PortableText value={body} />        
        <p>{new Date(date!).toLocaleString("pt-BR", { year: "numeric", month: "numeric", day: "numeric" })}</p>
        <br/>
    </div>
  );
}