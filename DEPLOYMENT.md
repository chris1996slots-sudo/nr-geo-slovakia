# Deployment Guide

Step-by-step guide for deploying the NR-GEO website.

## 📋 Prerequisites

**IMPORTANT**: The `dist/` folder already contains the production-ready website. You do NOT need Node.js - just upload the files!

If you need to rebuild:
1. **Node.js 18+** ([Download](https://nodejs.org/))
2. **Web Server Access**
   - FTP/SFTP credentials
   - Or hosting dashboard access (cPanel, Plesk, etc.)

## 🚀 Deployment Steps

### Option A: Direct Upload (Recommended - No Build Needed!)

**The `dist/` folder is already included and ready to deploy.**

1. **Upload Files**
   ```
   Upload the entire contents of dist/ folder to your web server
   ```

2. **Configure Server** (see Server Configuration section below)

3. **Test** (open your domain in browser)

### Option B: Build from Source (Only if needed)

If the `dist/` folder is missing or you made changes to source code:

#### Step 1: Install Dependencies

Open terminal in project folder:

```bash
npm install
```

**Note**: This may take a few minutes.

#### Step 2: Create Production Build

```bash
npm run build
```

This creates a `dist/` folder with all optimized files.

#### Step 3: Test Build (Optional)

```bash
npm run preview
```

Opens the website at `http://localhost:4173` for testing.

#### Step 4: Upload Files

##### Option 1: FTP/SFTP Upload
1. Connect with your FTP client (FileZilla, WinSCP, etc.)
2. Navigate to your web root directory (usually `public_html/` or `www/`)
3. Upload **all contents** of the `dist/` folder
4. Also upload the `.htaccess` file (see below)

##### Option 2: cPanel File Manager
1. Log into cPanel
2. Open File Manager
3. Navigate to `public_html/`
4. Click "Upload"
5. Upload all files from the `dist/` folder

##### Option 3: Hosting Platforms
- **Netlify**: Drag & drop the `dist/` folder
- **Vercel**: Connect GitHub repository or upload `dist/` folder

## 🔧 Server Configuration

### For Apache Servers (.htaccess)

The `.htaccess` file is already in the `public/` folder. Copy it to your `dist/` folder before uploading:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>
```

### For Nginx Servers

Add this to your Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.sk;
    root /path/to/dist/folder;
    index index.html;

    # Single Page Application Support
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Browser Caching
    location ~* \.(jpg|jpeg|png|gif|ico|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
    }
}
```

## 🌐 Domain Configuration

1. **Verify DNS**
   - A Record points to server IP
   - Or CNAME points to hosting provider

2. **Install SSL Certificate** (recommended)
   - Let's Encrypt (free)
   - Or SSL from hosting provider

3. **Force HTTPS** (optional but recommended)

   Add to `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## ✅ Testing

1. Open your domain in browser
2. Verify all sections load
3. Test language switching (7 languages)
4. Test on different devices
5. Test contact form

## 📋 Deployment Checklist

Before go-live:

- [ ] Production build created (or dist/ folder ready)
- [ ] All files from `dist/` uploaded
- [ ] `.htaccess` (Apache) or Nginx config created
- [ ] Domain points to correct server
- [ ] SSL certificate installed
- [ ] Website tested in browser
- [ ] All 7 languages working
- [ ] Contact form working
- [ ] Mobile view tested

## 🔄 Updating the Website

To update the website:

1. Make changes to source files
2. Run `npm run build` again
3. Upload the new `dist/` folder contents (overwrite old files)

**Tip**: Delete the old `dist/` folder before upload to avoid old files.

## 🆘 Troubleshooting

### Problem: Blank white page
**Solution**: `.htaccess` file missing or incorrectly configured

### Problem: 404 errors when reloading
**Solution**: Server rewrite rules missing (see Step 5)

### Problem: Images not displaying
**Solution**:
- Verify `public/` folder contents uploaded correctly
- Check image paths in JSON files

### Problem: Languages not working
**Solution**:
- JavaScript files uploaded correctly?
- Clear browser cache (Ctrl+F5)

### Problem: Build errors
**Solution**:
```bash
# Delete node modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

## 📊 Performance Optimization

### After deployment, check:

1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

### Optimization tips:

- **Use CDN** (Cloudflare, etc.)
- **Enable Gzip/Brotli compression**
- **Configure browser caching** (see .htaccess above)
- **Optimize images** (already WebP format)

## 🔒 Security

### Recommended settings:

1. **Force HTTPS** (see Domain Configuration)
2. **Add Security Headers** (`.htaccess`):

```apache
# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## 📞 Support

For deployment questions:
- **Email**: info@nr-geo.sk
- **Technical Documentation**: README.md

---

**Good luck with deployment! 🚀**
