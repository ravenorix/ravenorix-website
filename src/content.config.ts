import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


const footageCollections = defineCollection({
  loader: glob({
    base: "./src/content/collections",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),
    slug: z.string(),
    location: z.string(),
    year: z.number(),
    category: z.string(),
    description: z.string(),
    conditions: z.string().optional(),
    season: z.string().optional(),
    seriesPrice: z.number().optional(),
    seriesGumroadUrl: z.string().url().optional(),
    seriesPoster: z.string().optional(),
    seriesThumbnail: z.string().optional(),
    heroImage: z.string().optional(),
    thumbnail: z.string().optional(),
    poster: z.string().optional(),
  }),
});


const packs = defineCollection({
  loader: glob({
    base: "./src/content/packs",
    pattern: "**/*.md",
  }),

  schema: z.object({
  title: z.string(),
  slug: z.string(),
  collectionSlug: z.string(),
  year: z.number(),
  packNumber: z.number(),
  location: z.string(),
  description: z.string(),
  clipCount: z.number().optional(),
  conditions: z.string().optional(),
  season: z.string().optional(),
  previewVideo: z.string().optional(),
  gumroadUrl: z.string().url(),
  heroImage: z.string().optional(),
  thumbnail: z.string().optional(),

  standardPrice: z.number(),
  proPrice: z.number(),
}),
});

const music = defineCollection({
  loader: glob({
    base: "./src/content/music",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    trackCount: z.number().optional(),
    price: z.number().optional(),
    gumroadUrl: z.string().url().optional(),
    thumbnail: z.string().optional(),
    poster: z.string().optional(),
    previewUrl: z.string().optional(),
  }),
});

export const collections = {
  footageCollections,
  packs,
  music,
};