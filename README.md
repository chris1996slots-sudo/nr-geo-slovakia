# NR-GEO Slovakia - Corporate Website

Modern, high-performance corporate website for NR-GEO Slovakia, a leading engineering surveying company specializing in underground construction, tunneling, and geodesy.

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: i18next with browser language detection
- **Deployment**: Netlify/Vercel ready

## Features

### Multi-Language Support (12 Languages)
- Auto-detect browser language on first visit
- Language selector in navbar
- Full translation support for:
  - Slovak (Native)
  - English (Global)
  - Swedish (Key Market)
  - Norwegian (Key Market)
  - Ukrainian (Strategic Market)
  - Mandarin Chinese
  - Hindi
  - Spanish
  - French
  - Arabic
  - Portuguese
  - Russian

### Modern Design
- Clean, professional engineering aesthetic
- NR-GEO brand colors (Primary Orange #F58220)
- Fully responsive (Mobile First)
- Smooth animations and transitions
- High-quality imagery

### Comprehensive Content Sections
1. **Hero** - High-impact introduction with tunneling imagery
2. **About Us** - Slovak Construction Intelligence & 2026 strategy
3. **Services** - 4 core services with 2026 focus areas
4. **Markets** - Scandinavia, Balkans, Ukraine
5. **Projects** - Portfolio including Förbifart Stockholm, Brenner Base Tunnel, Rail Baltica
6. **Contact** - Interactive form with business information

## Project Structure

```
nr-geo/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with language selector
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Services.jsx        # Services showcase
│   │   ├── Markets.jsx         # Market presence
│   │   ├── Projects.jsx        # Project portfolio
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── i18n/
│   │   ├── i18n.js            # i18next configuration
│   │   └── locales/           # Translation files (12 languages)
│   │       ├── sk.json        # Slovak
│   │       ├── en.json        # English
│   │       ├── sv.json        # Swedish
│   │       ├── no.json        # Norwegian
│   │       ├── uk.json        # Ukrainian
│   │       ├── zh.json        # Chinese
│   │       ├── hi.json        # Hindi
│   │       ├── es.json        # Spanish
│   │       ├── fr.json        # French
│   │       ├── ar.json        # Arabic
│   │       ├── pt.json        # Portuguese
│   │       └── ru.json        # Russian
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000`

## Configuration

### Tailwind CSS
The custom color scheme is configured in `tailwind.config.js`:
- Primary Orange: `#F58220`
- Dark Grey/Black for contrast
- Custom animations and utilities

### i18next
Language detection is automatic based on:
1. Browser language settings
2. HTML lang attribute
3. Cached language preference (localStorage)

Fallback language: English

## Customization

### Adding New Languages
1. Create a new JSON file in `src/i18n/locales/`
2. Add the language code to `src/i18n/i18n.js`:
   - Import the translation file
   - Add to resources object
   - Add to supportedLngs array
3. Add the language to the navbar selector in `src/components/Navbar.jsx`

### Updating Content
All text content is stored in translation files (`src/i18n/locales/*.json`). Update the appropriate language file to change content.

### Styling
- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Inline Tailwind classes

## 2026 Strategic Focus

The website highlights NR-GEO's 2026 strategic pivot:
- **Non-Russian Supply Chains**: Emphasis on sustainable sourcing from Turkey, India, and EU markets
- **Digital Transformation**: Scan-to-BIM, Digital Twins, and material optimization technology
- **Automated Monitoring**: Geotechnical sensor systems for real-time stability monitoring
- **Ukraine Reconstruction**: Strategic partnership in rebuilding critical infrastructure

## Key Markets

- **Scandinavia**: Sweden, Norway (Förbifart Stockholm and major transport infrastructure)
- **Balkans**: Corridor VIII connecting Eastern and Western Europe
- **Ukraine**: Post-conflict reconstruction with sustainable materials

## Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

Or use the Vercel/Netlify CLI for automatic deployment.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- ES6+ features required

## License

© 2026 NR-GEO Slovakia. All rights reserved.

## Contact

For more information about NR-GEO Slovakia:
- Website: https://www.nr-geo.sk
- Email: info@nr-geo.sk
- Location: Bratislava, Slovakia
