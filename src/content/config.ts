import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const projectSchema = ({ image }: { image: () => any }) =>
    z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        cover: image(),
        coverAlt: z.string().default(""),
        // Completion date — primary sort key (newest first).
        date: z.coerce.date().optional(),
        // Pin to the top of the grid, before date-sorted entries.
        featured: z.boolean().default(false),
        // Hide from the production build while a writeup is in progress.
        draft: z.boolean().default(false),
        // Optional metadata shown in the detail page's info strip.
        role: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).default([]),
        tools: z.array(z.string()).default([]),
        links: z.array(z.object({
            label: z.string(),
            url: z.string().url(),
        })).default([]),
        // Manual ordering override (lower = earlier). Legacy fallback.
        order: z.number().optional(),
        gallery: z.array(z.object({
            src: image(),
            alt: z.string().default(""),
        })).default([]),
    });

// Czech is the source of truth: one `index.md` per project folder.
const projects = defineCollection({
    loader: glob({ pattern: ["**/index.md", "**/index.mdx"], base: "./src/content/projects" }),
    schema: projectSchema,
});

// Optional English translations: `index.en.md` in the same project folder.
// When absent for a given slug, the English route falls back to Czech content.
const projectsEn = defineCollection({
    loader: glob({ pattern: ["**/index.en.md", "**/index.en.mdx"], base: "./src/content/projects" }),
    schema: projectSchema,
});

export const collections = { projects, projectsEn };
