# Adding & editing projects

Projects live in `src/content/projects/`, one folder per project, with the
markdown and its images co-located:

```
src/content/projects/<slug>/
  index.md        # Czech content (the default language)
  index.en.md     # English content (optional — falls back to Czech)
  cover.jpg       # cover image
  gallery-1.jpg   # optional gallery images
  …
```

> Don't add a `README.md` (or any other `.md`) inside `src/content/projects/` —
> every markdown file there is treated as a project and must have valid
> frontmatter.

## Quick start

```bash
pnpm new:project
```

This prompts for a few fields and scaffolds `src/content/projects/<slug>/index.md`
from `scripts/templates/project.md`. Then:

1. Drop a `cover.jpg` into the new folder.
2. Drop any gallery images into the same folder — they're added to the gallery
   automatically (no frontmatter needed). See [Gallery](#gallery) below.
3. Write the body. Reference inline images **relatively**: `![Popisek](./obrazek.jpg)`.
4. Set `draft: false` to publish.
5. `pnpm dev` and open `/projects/<slug>`.

## Frontmatter fields

| Field         | Required | Notes                                                        |
| ------------- | -------- | ------------------------------------------------------------ |
| `title`       | yes      | Display name.                                                |
| `description` | yes      | One-line summary (used on the grid + social cards).          |
| `slug`        | yes      | URL segment, e.g. `/projects/<slug>`.                        |
| `cover`       | yes      | Relative path to the cover image, e.g. `./cover.jpg`.        |
| `coverAlt`    | no       | Alt text for the cover.                                      |
| `date`        | no       | `YYYY-MM-DD`. Primary sort key (newest first).               |
| `featured`    | no       | `true` pins the project to the top of the grid.             |
| `draft`       | no       | `true` hides it from the production build.                   |
| `role`        | no       | Shown in the detail page info strip.                         |
| `category`    | no       | Shown on the grid card and the info strip.                   |
| `tags`        | no       | List of strings.                                             |
| `tools`       | no       | List of strings, shown in the info strip.                    |
| `links`       | no       | List of `{ label, url }`, shown in the info strip.           |
| `gallery`     | no       | Manual override — see [Gallery](#gallery). Usually omit it.   |

## Gallery

By default the gallery is **built automatically** from every image in the
project's folder **except the cover** (`cover.*`), sorted alphabetically by
filename. Just drop images into the folder — no frontmatter required. To control
the order, prefix filenames (`01-…`, `02-…`).

> Note: auto mode includes *all* non-cover images, so any images you reference
> inline in the body will also appear in the gallery.

To curate the gallery manually (specific images, custom order, or alt text),
list them explicitly — this overrides the automatic behavior:

```yaml
gallery:
  - src: ./detail.jpg
    alt: Detail uložení
  - src: ./montaz.jpg
    alt: Montáž
```

## Ordering

Projects sort **featured first, then by `date` (newest first)**. You rarely
need to touch ordering manually — just set an accurate `date`. The legacy
`order` number still works as a tie-breaker if present.

## English content

To translate a project, add `index.en.md` in the same folder with the same
images. It is served at `/en/projects/<slug>`. If it's missing, the English
route falls back to the Czech content.
