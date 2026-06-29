import type { ImageMetadata } from "astro";
import type { Project } from "./projects";

// Eagerly load every image co-located in a project folder. Keys are absolute
// from the project root, e.g. "/src/content/projects/gsec-box/shell.png".
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/projects/**/*.{jpeg,jpg,png,webp,avif,gif}",
    { eager: true },
);

export type GalleryItem = { src: ImageMetadata; alt: string };

/**
 * Returns the gallery for a project. If the frontmatter `gallery` is set, it is
 * used as-is (manual override). Otherwise the gallery is built automatically
 * from every image in the project's folder except the cover (`cover.*`),
 * sorted alphabetically by filename.
 */
export function getGalleryImages(project: Project): GalleryItem[] {
    if (project.data.gallery.length > 0) {
        return project.data.gallery.map((item) => ({ src: item.src, alt: item.alt }));
    }

    // Derive the project's folder path to match against the glob keys.
    const marker = "src/content/projects/";
    const filePath = project.filePath ?? "";
    const start = filePath.indexOf(marker);
    if (start === -1) return [];
    const folder = "/" + filePath.slice(start).replace(/index\.mdx?$/, "");
    const coverSrc = project.data.cover.src;

    return Object.entries(projectImages)
        .filter(([path, mod]) => {
            if (!path.startsWith(folder)) return false;
            const name = path.slice(folder.length);
            if (name.includes("/")) return false; // direct children only
            if (name.toLowerCase().startsWith("cover.")) return false;
            // Exclude the cover itself, whatever it's named (same image pipeline
            // ⇒ identical `.src`).
            return mod.default.src !== coverSrc;
        })
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, mod]) => ({ src: mod.default, alt: "" }));
}
