import { schemaTypes } from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  title: "Projeto Vasco",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
