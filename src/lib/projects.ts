import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../i18n/ui";

export type Project = CollectionEntry<"projects">;
export type ProjectEn = CollectionEntry<"projectsEn">;

/**
 * Returns projects for display: drafts hidden in production, sorted with
 * featured entries first, then newest by `date`, with legacy `order` and
 * title as tie-breakers.
 */
export async function getVisibleProjects(): Promise<Project[]> {
    const projects = await getCollection("projects", ({ data }) =>
        import.meta.env.PROD ? !data.draft : true,
    );

    return projects.sort(compareProjects);
}

/**
 * Returns the English translation entry for each visible project slug, when an
 * `index.en.md` exists. Slugs without a translation are absent from the map.
 */
export async function getEnglishProjectMap(): Promise<Map<string, ProjectEn>> {
    const english = await getCollection("projectsEn");
    return new Map(english.map((entry) => [entry.data.slug, entry]));
}

/**
 * Localized card data for the projects grid: English title/description/category
 * when a translation exists, otherwise the Czech values. Cover/slug always come
 * from the canonical Czech entry.
 */
export async function getLocalizedProjectCards(locale: Locale) {
    const projects = await getVisibleProjects();
    if (locale === "cs") {
        return projects.map((project) => ({ project, data: project.data }));
    }

    const english = await getEnglishProjectMap();
    return projects.map((project) => {
        const en = english.get(project.data.slug);
        return {
            project,
            data: {
                ...project.data,
                title: en?.data.title ?? project.data.title,
                description: en?.data.description ?? project.data.description,
                category: en?.data.category ?? project.data.category,
            },
        };
    });
}

function compareProjects(a: Project, b: Project): number {
    // Featured first.
    if (a.data.featured !== b.data.featured) {
        return a.data.featured ? -1 : 1;
    }

    // Newest date first; entries without a date sort after dated ones.
    const aTime = a.data.date?.getTime();
    const bTime = b.data.date?.getTime();
    if (aTime !== bTime) {
        if (aTime === undefined) return 1;
        if (bTime === undefined) return -1;
        return bTime - aTime;
    }

    // Legacy manual order (lower first); undefined sorts last.
    const aOrder = a.data.order ?? Number.POSITIVE_INFINITY;
    const bOrder = b.data.order ?? Number.POSITIVE_INFINITY;
    if (aOrder !== bOrder) return aOrder - bOrder;

    return a.data.title.localeCompare(b.data.title);
}
