import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    price: z.string().optional(),
    link: z.string().optional(),
  }),
});


const portfolio = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});


const affiliates = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    category: z.string(),
  }),
});


const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});


export const collections = {
  products,
  portfolio,
  affiliates,
  blog,
};