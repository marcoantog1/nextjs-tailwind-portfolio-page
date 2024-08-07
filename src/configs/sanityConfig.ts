const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: "2024-02-12",
  useCdn: false,
};

export default sanityConfig;
