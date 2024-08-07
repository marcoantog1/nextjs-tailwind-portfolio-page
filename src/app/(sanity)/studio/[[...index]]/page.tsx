"use client";

import { NextStudio } from "next-sanity/studio";

import React from "react";
import config from "../../../../../sanity.config";

const BlogEdit = () => {
  return <NextStudio config={config} />;
};
export default BlogEdit;