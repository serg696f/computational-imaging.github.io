# Computational Imaging Code — Website Guide

This document explains how the `code.computational-imaging.org` website works and how to add new projects to it.

---

## Table of Contents

1. [Website Overview](#website-overview)
2. [Site Structure](#site-structure)
3. [How to Add a New Project](#how-to-add-a-new-project)
4. [How to Edit an Existing Project](#how-to-edit-an-existing-project)
5. [How to Update the Home Page Project List](#how-to-update-the-home-page-project-list)
6. [Search](#search)
7. [How Changes Are Deployed](#how-changes-are-deployed)
8. [File Reference](#file-reference)

---

<a name="website-overview"></a>
## Website Overview

The site is a **Jekyll** static site hosted on **GitHub Pages** at `code.computational-imaging.org`. It uses the [Just the Docs](https://just-the-docs.com/) theme, which provides:

- A left-hand navigation sidebar with all projects listed
- A top search bar that searches across all pages automatically
- Clean, minimal documentation-style layout
- Mobile-friendly responsive design

No coding or local setup is required to update the site — all edits can be made directly through the GitHub web interface. Changes go live automatically within about 1 minute of being committed.

---

<a name="site-structure"></a>
## Site Structure

```
repo root/
├── _config.yml              # Site-wide settings (title, theme, search, URL)
├── Gemfile                  # Jekyll dependencies (do not edit)
├── index.md                 # Home page with project table
├── CNAME                    # Custom domain (do not edit)
├── repos/
│   ├── index.md             # "Repositories" section landing page
│   ├── mbirjax.md           # MBIRJAX project page
│   └── yourproject.md       # ← new projects go here
└── .github/
    └── workflows/
        └── jekyll.yml       # Auto-deployment workflow (do not edit)
```

Each `.md` file in `/repos/` becomes one page in the site. The filename becomes part of the URL — for example, `repos/mbirjax.md` is accessible at `https://code.computational-imaging.org/repos/mbirjax`.

---

<a name="how-to-add-a-new-project"></a>
## How to Add a New Project

### Step 1 — Create the project page

1. Go to the repository on GitHub and click the **`repos/`** folder
2. Click **Add file → Create new file**
3. In the filename box, type: `repos/yourprojectname.md` (use lowercase, no spaces)
4. Paste the following template and fill in the details:
5. nav_order is the last project + 1 and determines the order in the project list

{: .fs-6 .fw-300 }

.fs-6 — font size, scale 1–10 where 1 is smallest. fs-6 is roughly 1.1rem — slightly larger than body text

.fw-300 — font weight 300, which is "light" (normal is 400, bold is 700)

Together they produce a large, light-weight subtitle line — the elegant subheading style you see under the project title on each page.

{: .no_toc .text-delta }

.no_toc — excludes this heading from the auto-generated table of contents. Without it, "Table of Contents" would appear as an entry inside its own list, which would be circular and redundant

.text-delta — applies a small, uppercase, letter-spaced label style — making it look like a section label rather than a full h2 heading

The two always appear together on TOC headings because:

.no_toc handles the logic (don't list this heading)

.text-delta handles the appearance (make it look like a label)

Without them, the heading would appear as a large bold h2 and also list itself inside the TOC it introduces.

```markdown
---
layout: default
title: Your Project Name
parent: Repositories
nav_order: 2
---

# Your Project Name
{: .no_toc }

One-line description of what the project does.
{: .fs-6 .fw-300 }

[View on GitHub](https://github.com/username/reponame){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[Documentation](https://yourproject.readthedocs.io){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Describe what the project does, what problem it solves, and who it is for.

### Key Features

- Feature one
- Feature two
- Feature three

---

## Installation

pip install yourpackage

---

## Quick Start

import yourpackage

# Example usage here

---

## License

License name — see [LICENSE](https://github.com/username/reponame/blob/main/LICENSE).
```

5. Scroll down and click **Commit changes** → **Commit directly to `main`**

### Step 2 — Update the home page table

See [How to Update the Home Page Project List](#how-to-update-the-home-page-project-list) below.

### Step 3 — Set the nav_order

The `nav_order` value in the front matter controls the order projects appear in the left sidebar. MBIRJAX is `nav_order: 1`. Set your new project to `nav_order: 2`, the next to `3`, and so on.

---

<a name="how-to-edit-an-existing-project"></a>
## How to Edit an Existing Project

1. Go to the repository on GitHub → click the `repos/` folder
2. Click the `.md` file you want to edit (e.g. `mbirjax.md`)
3. Click the **pencil icon** (Edit this file) in the top right
4. Make your changes
5. Click **Commit changes** → **Commit directly to `main`**

The site will rebuild and the changes will be live within about 1 minute.

---

<a name="how-to-update-the-home-page-project-list"></a>
## How to Update the Home Page Project List

The home page (`index.md`) contains a Markdown table listing all projects. To add a row:

1. Go to the repository → click `index.md`
2. Click the **pencil icon**
3. Find the table that looks like this:

```
| Project | Description | Language | License |
|---|---|---|---|
| [MBIRJAX](repos/mbirjax) | Model-Based Iterative Reconstruction using JAX | Python | BSD-3 |
```

4. Add a new row for your project:

```
| [Your Project](repos/yourprojectname) | Short description | Python | MIT |
```

5. Commit directly to `main`

---

<a name="search"></a>
## Search

Search is built into the Just the Docs theme and requires **no configuration**. It automatically indexes every page on the site, including all headings and body text.

Users can search from the search bar at the top of any page. Search results show a preview of the matching text and link directly to the relevant section of the page.

To make a project more searchable, use descriptive headings and include relevant keywords (algorithm names, methods, file formats, application areas) in the page text.

---

<a name="how-changes-are-deployed"></a>
## How Changes Are Deployed

Every time a change is committed to the `main` branch, GitHub automatically:

1. Runs the Jekyll build (compiles all `.md` files into HTML)
2. Deploys the result to GitHub Pages
3. Makes the updated site live at `code.computational-imaging.org`

This takes approximately **1 minute**. You can monitor progress under the **Actions** tab in the repository — a green checkmark means the deployment succeeded.

If the Actions tab shows a red ✗, click the failed run to see the error log. The most common cause is a syntax error in a `.md` file's front matter (the `---` block at the top).

---

<a name="file-reference"></a>
## File Reference

| File | Purpose | Edit? |
|---|---|---|
| `_config.yml` | Site title, theme, search, URL, footer | Only for site-wide settings |
| `Gemfile` | Jekyll gem dependencies | No |
| `index.md` | Home page — contains the project table | Yes, to add new projects |
| `CNAME` | Custom domain routing | No |
| `repos/index.md` | "Repositories" section header page | Rarely |
| `repos/*.md` | Individual project pages | Yes |
| `.github/workflows/jekyll.yml` | Auto-deployment pipeline | No |

### Front matter fields (top of each `.md` file)

| Field | Required | Description |
|---|---|---|
| `layout` | Yes | Always `default` for project pages |
| `title` | Yes | Page title shown in sidebar and browser tab |
| `parent` | Yes | Must be `Repositories` for project pages |
| `nav_order` | Yes | Controls order in sidebar (1 = top) |
