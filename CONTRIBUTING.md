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
2. Add any gallery images to the folder and list them under `gallery:`.
3. Write the body. Reference images **relatively**: `![Popisek](./gallery-1.jpg)`.
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
| `gallery`     | no       | List of `{ src, alt }` using relative `./` paths.            |

## Ordering

Projects sort **featured first, then by `date` (newest first)**. You rarely
need to touch ordering manually — just set an accurate `date`. The legacy
`order` number still works as a tie-breaker if present.

## English content

To translate a project, add `index.en.md` in the same folder with the same
images. It is served at `/en/projects/<slug>`. If it's missing, the English
route falls back to the Czech content.
