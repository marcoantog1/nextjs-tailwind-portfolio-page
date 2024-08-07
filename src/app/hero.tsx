"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getPosts } from "@/sanity/utils/post";
import { SanityImage } from "@/components/sanity-image";
import { BlogPost } from "@/components/blog-post";


async function Hero() {

const blogposts = await getPosts()
// console.log(blogposts)

  return (
    <header className="bg-light-green-300 p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
        {blogposts.map((post, i) => {
          return <BlogPost image={post.image!} paragraph={post.paragraph} body={post.body} date={post.publishedDate!} title={post.title} key={i}/>
        })}
        
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/images.jpeg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
