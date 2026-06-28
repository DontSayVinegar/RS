#!/usr/bin/env node
// Scaffolds a new project folder under src/content/projects/<slug>/
// from scripts/templates/project.md. Run with: pnpm new:project
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const projectsDir = join(root, "src", "content", "projects");
const templatePath = join(here, "templates", "project.md");

function slugify(value) {
    return value
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "") // strip diacritics (č → c)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// Minimal line reader that behaves the same for an interactive TTY and for
// piped/redirected stdin (where readline/promises can hang on buffered lines).
const rl = createInterface({ input });
const queue = [];
let pending = null;
let closed = false;
rl.on("line", (line) => {
    if (pending) { const resolve = pending; pending = null; resolve(line); }
    else queue.push(line);
});
rl.on("close", () => {
    closed = true;
    if (pending) { const resolve = pending; pending = null; resolve(null); }
});
const nextLine = () => {
    if (queue.length) return Promise.resolve(queue.shift());
    if (closed) return Promise.resolve(null);
    return new Promise((resolve) => { pending = resolve; });
};
const ask = async (q, fallback = "") => {
    output.write(fallback ? `${q} [${fallback}]: ` : `${q}: `);
    const line = await nextLine();
    const a = (line ?? "").trim();
    return a || fallback;
};

try {
    const title = await ask("Title");
    if (!title) {
        console.error("A title is required.");
        process.exit(1);
    }

    const slug = slugify(await ask("Slug (URL)", slugify(title)));
    const description = await ask("Short description");
    const date = await ask("Completion date (YYYY-MM-DD)", new Date().toISOString().slice(0, 10));
    const role = await ask("Your role (optional)");
    const category = await ask("Category (optional)");

    const folder = join(projectsDir, slug);
    if (existsSync(folder)) {
        console.error(`\nA project folder already exists at src/content/projects/${slug}/`);
        process.exit(1);
    }

    const template = readFileSync(templatePath, "utf8");
    const filled = template
        .replaceAll("__TITLE__", title)
        .replaceAll("__SLUG__", slug)
        .replaceAll("__DESCRIPTION__", description)
        .replaceAll("__DATE__", date)
        .replaceAll("__ROLE__", role)
        .replaceAll("__CATEGORY__", category);

    mkdirSync(folder, { recursive: true });
    writeFileSync(join(folder, "index.md"), filled);

    console.log(`\n✓ Created src/content/projects/${slug}/index.md`);
    console.log("\nNext steps:");
    console.log(`  1. Drop a cover.jpg into  src/content/projects/${slug}/`);
    console.log("  2. Add any gallery images to that folder and list them in the frontmatter.");
    console.log("  3. Write the project body, then set draft: false to publish.");
    console.log("  4. Run  pnpm dev  to preview at /projects/" + slug);
} finally {
    rl.close();
}
