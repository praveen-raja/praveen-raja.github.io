# praveen-raja.github.io

[![Deploy: GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github)](https://praveen-raja.github.io)
[![Built with Jekyll](https://img.shields.io/badge/built%20with-Jekyll-CC0000?logo=jekyll&logoColor=white)](https://jekyllrb.com/)
[![Theme: Minimal Mistakes](https://img.shields.io/badge/theme-Minimal%20Mistakes-52adc8)](https://github.com/mmistakes/minimal-mistakes)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Personal site for Praveenkumar Raja: landing page, about, projects, blog, and a
view-only HTML resume. Built with [Jekyll](https://jekyllrb.com/) and the
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) remote theme,
served by GitHub Pages.

**Live site:** https://praveen-raja.github.io

## How it deploys

GitHub Pages builds the site automatically on every push to the default branch.
No local build step is required. In the repo, go to **Settings -> Pages** and set
the source to the default branch (root). For a `username.github.io` user site the
URL is `https://praveen-raja.github.io`.

## Add a blog post

1. Create a file in `_posts/` named `YYYY-MM-DD-title.md`.
2. Add front matter at the top, then write in Markdown:

   ```markdown
   ---
   title: "My Post Title"
   date: 2026-09-01 09:00:00 +0530
   categories:
     - engineering
   tags:
     - spring-boot
   excerpt: "One-line summary shown in the blog list."
   ---

   Your content here.
   ```

3. Commit and push. The post appears at `/blog/` automatically.

## Edit the resume or about content

- Resume: `_pages/resume.md` (rendered as a responsive HTML page, view-only).
- About: `_pages/about.md`.

The resume is intentionally **HTML only** — there is no downloadable PDF and no
phone number anywhere on the site.

## Projects

Edit `_pages/projects.md`. Each project is a `project-card` block; copy one and
update the title, description, tags, and links. There is a "Featured" slot at the
top to highlight a headline project.

## Light / dark theme

The site defaults to a dark developer theme with a floating toggle (bottom-right)
that switches to light mode and remembers the choice via `localStorage`.

- Default skin: `assets/css` + `minimal_mistakes_skin: dark` in `_config.yml`
- Toggle logic: `assets/js/theme-toggle.js`
- Light-mode overrides: `assets/css/theme-toggle.css`

## Local preview (optional)

Requires Ruby and Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Project structure

```
.
├── _config.yml            # Site + theme configuration
├── index.md               # Landing / hero page
├── _pages/                # About, Projects, Blog, Resume
├── _posts/                # Blog posts (YYYY-MM-DD-title.md)
├── _data/navigation.yml   # Top navigation
├── _includes/head/        # Custom <head> (favicon, theme bootstrap)
└── assets/                # CSS, JS, images
```

## License

Released under the [MIT License](LICENSE). Site content and resume text are
&copy; Praveenkumar Raja.
