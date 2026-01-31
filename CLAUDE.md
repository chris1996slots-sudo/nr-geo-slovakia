# NR-GEO Slovakia - Project Context

## Live Website
- **Domain**: https://nr-geo.com
- **Status**: Live & Production

## GitHub Repository
- **URL**: https://github.com/chris1996slots-sudo/nr-geo-slovakia.git
- **Branch**: main
- **Deployment**: Auto-deploy via Netlify (from GitHub)

## Hosting
- **Platform**: Netlify
- **Config**: `netlify.toml`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **i18n**: i18next (7 languages)
- **Icons**: Lucide React

## Project Structure
```
nr-geo/
├── dist/                    # Production build (deployed)
├── public/
│   ├── images/              # Static images
│   ├── projects/            # Project images
│   ├── robots.txt           # SEO robots
│   └── sitemap.xml          # XML Sitemap
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ImageLightbox.jsx
│   │   ├── Markets.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Team.jsx
│   ├── contexts/            # React contexts
│   ├── i18n/
│   │   ├── i18n.js          # i18next config
│   │   └── locales/         # Translation files
│   │       ├── de.json      # German
│   │       ├── en.json      # English
│   │       ├── es.json      # Spanish
│   │       ├── fr.json      # French
│   │       ├── no.json      # Norwegian
│   │       ├── sk.json      # Slovak
│   │       └── sv.json      # Swedish
│   ├── pages/               # Page components
│   ├── App.jsx              # Main app
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template (with SEO/Schema)
├── package.json
├── vite.config.js
├── tailwind.config.js
└── netlify.toml
```

## Available Scripts
```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## SEO & Structured Data
The `index.html` contains Schema.org structured data for:
- **Organization** - Company info, logo, services
- **WebSite** - Site identification for Google
- **SiteNavigationElement** - For Google Sitelinks (Services, Projects, About, Contact)
- **ProfessionalService** - Service catalog with offers

### Important SEO Files
- `public/sitemap.xml` - XML Sitemap with all language versions
- `public/robots.txt` - Allows all crawlers, references sitemap
- `index.html` - Meta tags, Open Graph, Twitter Cards

## Languages Supported
| Code | Language   | URL                    |
|------|------------|------------------------|
| en   | English    | nr-geo.com/en          |
| de   | German     | nr-geo.com/de          |
| sk   | Slovak     | nr-geo.com/sk          |
| sv   | Swedish    | nr-geo.com/sv          |
| no   | Norwegian  | nr-geo.com/no          |
| es   | Spanish    | nr-geo.com/es          |
| fr   | French     | nr-geo.com/fr          |

## Deployment Workflow
1. Make changes locally
2. `npm run build` to create production build
3. `git add . && git commit -m "message"`
4. `git push origin main`
5. Netlify auto-deploys from GitHub

## Google Search Console
- Add property: nr-geo.com
- Submit sitemap: https://nr-geo.com/sitemap.xml
- Request indexing for new/updated pages

## Key Sections (Navigation)
- `#services` - Engineering services
- `#projects` - Featured projects
- `#about` - About the company
- `#contact` - Contact form

## Company Info
- **Name**: NR-GEO Slovakia s.r.o.
- **Industry**: Underground Engineering, Geodesy, Tunneling
- **Location**: Slovakia
- **Markets**: Europe (DE, AT, SE, NO, ES, FR)
