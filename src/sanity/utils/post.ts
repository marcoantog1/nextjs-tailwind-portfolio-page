import { createClient, groq } from "next-sanity";

import { Blog } from "../../types/blog";
import sanityConfig from "@/configs/sanityConfig";

export const getPosts = async (): Promise<Blog[]> => {
  return createClient(sanityConfig)
    .fetch(
      groq`*[_type == "post"]{
        "id": _id,
        publishedDate,
        title,
        "image": mainImage,
        paragraph,
        body
      } | order(publishedDate desc)`
    )
    .catch((error) =>
      console.error("🚀 ~ file: post.ts:25 ~ getPosts ~ error:", error)
    );
};

// export const getPost = async (slug: string | string[]): Promise<Blog> => {
//   return createClient(sanityConfig)
//     .fetch(
//       groq`*[_type == "post" && slug.current == $slug][0]{
//         "id": _id,
//         publishedDate,
//         title,
//         "image": mainImage,
//         paragraph,
//         body
//       }`,
//       { slug }
//     )
//     .catch((error) =>
//       console.error("🚀 ~ file: post.ts:50 ~ getPost ~ error:", error)
//     );
// };
