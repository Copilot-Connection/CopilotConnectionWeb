import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

const podcastsCollection =defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    audio_url: z.string(),
    artwork_url: z.string(),
    description: z.string().optional(),
    summary: z.string().optional(),
    artist: z.string().optional(),
    tags: z.string().optional(),
    published_at: z.date(),
    duration: z.number().optional(),
    hq: z.boolean().optional(),
    magic_mastering: z.boolean().optional(),
    guid: z.string().optional(),
    inactive_at: z.boolean().optional(),
    custom_url: z.string().optional(),
    episode_number: z.boolean().optional(),
    season_number: z.boolean().optional(),
    episode_type: z.string().optional(),
    explicit: z.boolean().optional(),
    private: z.boolean().optional(),
    total_plays: z.number().optional(),
  })
})

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
    bannerImage: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
