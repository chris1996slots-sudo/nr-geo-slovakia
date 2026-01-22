# Deployment Guide

Schritt-für-Schritt Anleitung zur Bereitstellung der NR-GEO Website.

## 📋 Voraussetzungen

1. **Node.js installiert** (Version 18 oder höher)
   - Download: https://nodejs.org/
   - Überprüfen: `node --version` im Terminal

2. **Zugang zum Webserver**
   - FTP/SFTP Zugangsdaten
   - Oder Zugang zu Hosting-Dashboard (cPanel, Plesk, etc.)

## 🚀 Deployment Schritte

### Schritt 1: Abhängigkeiten installieren

Öffnen Sie ein Terminal/Kommandozeile im Projektordner:

```bash
npm install
```

**Hinweis**: Dies kann einige Minuten dauern.

### Schritt 2: Production Build erstellen

```bash
npm run build
```

Dies erstellt einen `dist/` Ordner mit allen optimierten Dateien.

### Schritt 3: Build testen (Optional)

```bash
npm run preview
```

Öffnet die Website unter `http://localhost:4173` zum Testen.

### Schritt 4: Dateien hochladen

#### Option A: FTP/SFTP Upload
1. Verbinden Sie sich mit Ihrem FTP-Client (FileZilla, WinSCP, etc.)
2. Navigieren Sie zu Ihrem Web-Root-Verzeichnis (meist `public_html/` oder `www/`)
3. Laden Sie **den gesamten Inhalt** des `dist/` Ordners hoch
4. Laden Sie auch die `.htaccess` Datei hoch (siehe unten)

#### Option B: cPanel File Manager
1. Einloggen in cPanel
2. File Manager öffnen
3. Zu `public_html/` navigieren
4. "Upload" klicken
5. Alle Dateien aus dem `dist/` Ordner hochladen

#### Option C: Hosting-Plattformen
- **Netlify**: Drag & Drop des `dist/` Ordners
- **Vercel**: GitHub Repository verbinden oder `dist/` hochladen

### Schritt 5: Server konfigurieren

#### Für Apache Server (.htaccess)

Erstellen Sie eine `.htaccess` Datei im `dist/` Ordner (oder im Upload-Verzeichnis):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip Kompression
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

#### Für Nginx Server

Fügen Sie dies zu Ihrer Nginx-Konfiguration hinzu:

```nginx
server {
    listen 80;
    server_name ihr-domain.sk;
    root /pfad/zum/dist/ordner;
    index index.html;

    # Single Page Application Support
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip Kompression
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

### Schritt 6: Domain konfigurieren

1. **Domain DNS überprüfen**
   - A-Record zeigt auf Server-IP
   - Oder CNAME zeigt auf Hosting-Provider

2. **SSL-Zertifikat installieren** (empfohlen)
   - Let's Encrypt (kostenlos)
   - Oder SSL von Hosting-Provider

3. **HTTPS erzwingen** (optional aber empfohlen)

   In `.htaccess` hinzufügen:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### Schritt 7: Testen

1. Öffnen Sie Ihre Domain im Browser
2. Überprüfen Sie alle Seiten/Sections
3. Testen Sie Sprachumschaltung
4. Testen Sie auf verschiedenen Geräten
5. Testen Sie Kontaktformular

## ✅ Checkliste

- [ ] `npm install` ausgeführt
- [ ] `npm run build` erfolgreich
- [ ] Alle Dateien aus `dist/` hochgeladen
- [ ] `.htaccess` (Apache) oder Nginx-Config erstellt
- [ ] Domain zeigt auf richtigen Server
- [ ] SSL-Zertifikat installiert
- [ ] Website im Browser getestet
- [ ] Alle 7 Sprachen funktionieren
- [ ] Kontaktformular funktioniert
- [ ] Mobile Ansicht getestet

## 🔄 Updates durchführen

Wenn Sie die Website aktualisieren möchten:

1. Änderungen an den Quelldateien vornehmen
2. `npm run build` erneut ausführen
3. Inhalt des neuen `dist/` Ordners hochladen (überschreiben)

**Tipp**: Löschen Sie den alten `dist/` Ordner vor dem Upload, um alte Dateien zu vermeiden.

## 🆘 Troubleshooting

### Problem: Leere weiße Seite
**Lösung**: `.htaccess` Datei fehlt oder ist falsch konfiguriert

### Problem: 404 Fehler beim Neuladen
**Lösung**: Server-Rewrite-Regeln fehlen (siehe Schritt 5)

### Problem: Bilder werden nicht angezeigt
**Lösung**:
- Überprüfen Sie, ob der `public/` Ordner-Inhalt korrekt hochgeladen wurde
- Bildpfade in den JSON-Dateien überprüfen

### Problem: Sprachen funktionieren nicht
**Lösung**:
- JavaScript-Dateien korrekt hochgeladen?
- Browser-Cache leeren (Ctrl+F5)

### Problem: Build-Fehler
**Lösung**:
```bash
# Node modules löschen und neu installieren
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

## 📊 Performance-Optimierung

### Nach dem Deployment überprüfen:

1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

### Optimierungstipps:

- **CDN verwenden** (Cloudflare, etc.)
- **Gzip/Brotli Kompression** aktivieren
- **Browser Caching** konfigurieren (siehe .htaccess oben)
- **Bilder optimieren** (bereits WebP-Format)

## 🔒 Sicherheit

### Empfohlene Einstellungen:

1. **HTTPS erzwingen** (siehe Schritt 6)
2. **Security Headers** hinzufügen (`.htaccess`):

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

Bei Fragen zum Deployment:
- **Email**: info@nr-geo.sk
- **Technische Dokumentation**: README.md

---

**Viel Erfolg beim Deployment! 🚀**
