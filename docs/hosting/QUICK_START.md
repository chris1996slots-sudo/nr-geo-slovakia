# 🚀 Quick Start Guide für Hosting-Firma

## Schnellste Methode zum Deployment

### Schritt 1: Build erstellen
```bash
npm install
npm run build
```

### Schritt 2: Upload
Laden Sie den gesamten Inhalt des `dist/` Ordners auf Ihren Webserver hoch.

### Schritt 3: Server konfigurieren
Kopieren Sie die Datei `public/.htaccess` in den `dist/` Ordner (für Apache Server).

### ✅ Fertig!

Die Website ist jetzt online und einsatzbereit.

---

## Wichtige Dateien für Sie

- **README.md** - Vollständige technische Dokumentation
- **DEPLOYMENT.md** - Detaillierte Deployment-Anleitung (Deutsch)
- **CHANGELOG.md** - Alle Features und Änderungen
- **public/.htaccess** - Apache Server-Konfiguration

## Was ist enthalten?

✅ **7 Sprachen**: Slovak, English, German, Swedish, Norwegian, Spanish, French
✅ **Responsive Design**: Funktioniert auf allen Geräten
✅ **Dark/Light Mode**: Automatische Theme-Erkennung
✅ **SEO Optimiert**: Beste Performance
✅ **Schnell**: Code Splitting & Lazy Loading
✅ **Sicher**: Security Headers konfiguriert

## Technische Anforderungen

- **Node.js 18+** (nur für Build-Prozess)
- **Apache oder Nginx** Webserver
- **SSL-Zertifikat** (empfohlen)

## Support

Bei Fragen:
- Siehe **DEPLOYMENT.md** für detaillierte Anweisungen
- Siehe **README.md** für technische Details

---

**Hinweis**: Die Website ist ein Single Page Application (SPA) und benötigt die `.htaccess` Konfiguration für korrektes Routing!
