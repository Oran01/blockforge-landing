/**
 * config.ts
 *
 * Astro Content Collections Configuration.
 * Defines schema validation for two content collections: `blog` and `careers`,
 * enabling type-safe access to frontmatter fields across the site.
 */

import { defineCollection, z } from "astro:content";

/**
 * Blog collection
 *
 * Defines the frontmatter schema for all blog posts.
 * Includes author metadata, publication dates, and category.
 */
const blog = defineCollection({
  type: "content", // Indicates markdown-based content (vs. data or assets)

  // Frontmatter validation schema using Zod
  schema: z.object({
    title: z.string(), // Post title
    description: z.string(), // Short summary/description
    pubDate: z.coerce.date(), // Coerces string to Date object
    updatedDate: z.coerce.date().optional(), // Optional last updated timestamp
    category: z.string(), // Category or tag for filtering
    author: z.object({
      // Nested author metadata
      name: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
});

/**
 * Careers collection
 *
 * Defines the frontmatter schema for open positions listed on the site.
 * Includes job type, category, and remote flag.
 */
const careers = defineCollection({
  type: "content", // Markdown-based content for job posts

  schema: z.object({
    title: z.string(), // Job title
    description: z.string(), // Role summary or requirements
    category: z.string(), // Department/category (e.g., "Engineering")
    remote: z.boolean(), // Indicates if the role is remote-friendly
    type: z.string(), // Full-time, Part-time, Contract, etc.
  }),
});

// Export all content collections for use in Astro
export const collections = { blog, careers };
