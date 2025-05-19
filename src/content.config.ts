import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    id: z.string(),
    projectId: z.string().optional(),
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["en", "es"]),
    summary: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
