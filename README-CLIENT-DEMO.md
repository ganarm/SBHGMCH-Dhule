# BIN — Client preview (Angular)

Production-style **public site demo** with realistic **sample content** (replace via admin/API later).

## Design

| Token | Value | Use |
|-------|-------|-----|
| Primary | `#7A1F3D` | Nav bar, CTAs (refined maroon vs old bright pink) |
| Secondary | `#1B5E4B` | Society green, success states |
| Accent | `#B8861A` | Highlights, footer labels |
| Background | `#FAF9F7` | Page canvas |
| Display font | Libre Baskerville | Headings |
| Body font | Plus Jakarta Sans | UI & paragraphs |

## Run locally

```bash
cd bin-web
npm install
npm start
```

Open http://localhost:4200

## Build for Hostinger (static preview)

```bash
npm run build
```

Output: `dist/bin-web/browser/` — can be served from Nginx on VPS until .NET API is connected.

## Pages included

Full client sitemap: About, Courses, all Facilities, Placement drives, Research, Committees, Association (Alumni / SNA / NSS), FRA fee structure, MUHS mandate years, Faculty, Contact. Notices and Admissions remain reachable from the home page (`/notices`, `/admissions`) but are not in the main menu list.

## Demo controls (bottom-left)

| Control | Purpose |
|---------|---------|
| **Demo navigation** | Check/uncheck any menu or sub-menu item; header updates immediately. Saved in `localStorage` (`bin-nav-visibility`). |
| **Demo themes** | Color theme preview for client sign-off. |

Menu structure: `src/app/core/navigation/navigation.config.ts`. Dummy page copy: `mock-site.data.ts` + `content-pages.extra.ts`. Facilities: `facilities.data.ts`.

## Next step

Connect `SiteDataService` to ASP.NET Core API on Hostinger VPS; add **admin** app for notices/admissions CRUD.
