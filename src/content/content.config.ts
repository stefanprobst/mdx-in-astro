import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: {
    title: z.string(),
  },
});

export const collections = {
  posts,
};
