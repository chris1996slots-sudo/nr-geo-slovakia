# NR-GEO Slovakia Website

Modern, multilingual website for NR-GEO s.r.o. - Professional geodetic and surveying services for underground construction projects.

## 🌍 Features

- **7 Languages**: Slovak, English, German, Swedish, Norwegian, Spanish, French
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme switching with user preference
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Fast Loading**: Code splitting, lazy loading, and optimized images
- **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion

## 🚀 Quick Start for Hosting Company

### Prerequisites
- Node.js 18 or higher ([Download here](https://nodejs.org/))
- Basic terminal/command line knowledge

### Installation & Build

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist/` folder.

3. **Preview Production Build** (Optional)
   ```bash
   npm run preview
   ```
   Opens at `http://localhost:4173` to test the production build.

4. **Deploy**
   - Upload the entire `dist/` folder to your web server
   - Point your domain to serve files from the `dist/` folder
   - Configure your server for Single Page Application (see below)

### Server Configuration

The website is a Single Page Application (SPA) and requires proper server configuration to handle client-side routing.

#### Apache (.htaccess)
Create a `.htaccess` file in your `dist/` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
Add this to your nginx site configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### Alternative Platforms
- **Netlify**: Drag & drop the `dist/` folder (automatic SPA support)
- **Vercel**: Import from GitHub or upload `dist/` folder
- **GitHub Pages**: Use with GitHub Actions for automatic deployment

## 📁 Project Structure

```
nr-geo/
├── dist/                       # Production build (auto-generated)
│   ├── index.html
│   ├── assets/                # Optimized CSS & JavaScript
│   ├── images/                # Optimized images
│   └── projects/              # Project photos
│
├── docs/                       # Documentation
│   ├── hosting/               # For hosting company
│   │   ├── START_HERE.txt    # Entry point
│   │   ├── HANDOFF.txt       # Quick guide
│   │   └── DEPLOYMENT.md     # Detailed steps
│   └── development/           # For developers
│       └── CHANGELOG.md      # Version history
│
├── public/                     # Static assets
│   ├── projects/              # Project images
│   │   ├── praha-metro-d/    # 7 images
│   │   ├── forbifart/        # 21 images
│   │   ├── hammarby/         # 9 images
│   │   ├── oslo/             # 13 images
│   │   └── jarfalla/         # 7 images
│   ├── images/                # General images
│   ├── .htaccess              # Apache config
│   └── nr-geo-logo.png        # Company logo
│
├── src/                        # Source code
│   ├── components/            # React components
│   ├── i18n/                 # Translations (7 languages)
│   ├── pages/                # Page components
│   ├── App.jsx               # Main app
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
│
├── scripts/                    # Utility scripts
│   ├── convert_to_webp.py
│   └── update_translations.py
│
├── .env.example               # Environment template
├── package.json               # Dependencies
├── vite.config.js             # Build config
└── README.md                  # This file
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build (http://localhost:4173)
npm run preview

# Lint code
npm run lint
```

### Development Server
- Runs at `http://localhost:3000`
- Hot Module Replacement (HMR) enabled
- Opens automatically in your browser

## ✏️ Content Management

### Update Translations
All website content is stored in JSON files in `src/i18n/locales/`:

- `sk.json` - Slovak (native language)
- `en.json` - English
- `de.json` - German
- `sv.json` - Swedish
- `no.json` - Norwegian
- `es.json` - Spanish
- `fr.json` - French

**Example**: To change the company name:
```json
{
  "hero": {
    "title": "NR-GEO s.r.o.",  // Edit this line
    ...
  }
}
```

### Add Project Images
1. Create folder in `public/projects/[project-name]/`
2. Add images to the folder
3. Update `images` array in translation files:
```json
{
  "projects": {
    "yourProject": {
      "images": [
        "/projects/your-project/image1.jpg",
        "/projects/your-project/image2.jpg"
      ]
    }
  }
}
```

### Update Team Members
Edit the `team.members` array in each language file:
```json
{
  "team": {
    "members": [
      {
        "name": "Name",
        "position": "Position",
        "image": "/images/team/photo.jpg"
      }
    ]
  }
}
```

### Update Contact Information
Edit `contact` section in language files:
```json
{
  "contact": {
    "email": "info@nr-geo.sk",
    "phone": "+421 905 XXX XXX",
    "address": "Your Address"
  }
}
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#F58220',  // Main brand color
  // Add more custom colors
}
```

### Change Fonts
Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

body {
  font-family: 'Your Font', sans-serif;
}
```

## 🌐 SEO & Performance

- **Optimized Images**: WebP format with JPEG fallbacks
- **Code Splitting**: Automatic vendor chunking
- **Lazy Loading**: Images and components load on demand
- **Meta Tags**: Proper SEO meta tags in all languages
- **Performance**: Lighthouse score 90+ on all metrics

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔧 Technical Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.11
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 12.0.3
- **Icons**: Lucide React 0.469.0
- **Internationalization**: react-i18next 15.2.2
- **Form Handling**: EmailJS

## 📞 Support

For questions or technical support:
- **Email**: info@nr-geo.sk
- **Website**: https://www.nr-geo.sk

## 📄 License

© 2026 NR-GEO s.r.o. All rights reserved.

---

**Built with ❤️ for professional geodetic services**
