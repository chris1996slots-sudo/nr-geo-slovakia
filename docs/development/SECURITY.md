# Security Measures - NR-GEO Slovakia Website

This document outlines the security measures implemented to protect the NR-GEO Slovakia website.

## Overview

This is a static display website with a contact form. Security measures are focused on preventing common web vulnerabilities while maintaining functionality.

## Implemented Security Measures

### 1. HTTP Security Headers

**Configured in:** `netlify.toml`

- **X-Frame-Options: SAMEORIGIN**
  - Prevents clickjacking attacks by disallowing the site from being embedded in iframes from other domains

- **X-Content-Type-Options: nosniff**
  - Prevents MIME type sniffing, forcing browsers to respect declared content types

- **X-XSS-Protection: 1; mode=block**
  - Enables browser XSS filtering and blocks pages if attacks are detected

- **Referrer-Policy: strict-origin-when-cross-origin**
  - Controls referrer information sent with requests

- **Permissions-Policy**
  - Disables unnecessary browser APIs: geolocation, microphone, camera

- **Content-Security-Policy (CSP)**
  - Controls which resources can be loaded
  - Allows Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
  - Allows inline styles and scripts (required for React/Vite)
  - Restricts image sources to self, data URIs, and HTTPS

- **Strict-Transport-Security (HSTS)**
  - Forces HTTPS for all connections for 1 year
  - Includes subdomains
  - Prepared for browser preload lists

### 2. Contact Form Security

**Configured in:** `src/components/Contact.jsx`

#### Input Sanitization
All user inputs are sanitized to remove:
- HTML tags (`<` and `>` characters)
- JavaScript protocol handlers (`javascript:`)
- Event handler attributes (`onclick=`, `onload=`, etc.)
- Leading/trailing whitespace

#### Email Validation
- Validates email format using regex
- Prevents submission of invalid email addresses

#### Message Length Validation
- Requires minimum 10 characters to prevent spam
- Reduces low-effort/malicious submissions

#### Data Encoding
- All form data is URL-encoded before being sent via mailto:
- Prevents injection attacks in the email client

### 3. HTML Meta Tags

**Configured in:** `index.html`

Additional security meta tags in the HTML head:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer Policy

### 4. HTTPS Enforcement

- **Netlify Configuration**: Automatically redirects HTTP to HTTPS
- **HSTS Header**: Ensures browsers always use HTTPS after first visit

## What's Protected Against

✅ **Cross-Site Scripting (XSS)**
- Input sanitization in contact form
- CSP headers restrict script execution
- XSS protection headers

✅ **Clickjacking**
- X-Frame-Options prevents iframe embedding

✅ **MIME Sniffing Attacks**
- X-Content-Type-Options prevents content type confusion

✅ **Man-in-the-Middle (MITM) Attacks**
- HSTS forces HTTPS
- Secure transport layer

✅ **Injection Attacks**
- Input sanitization removes harmful characters
- Email validation prevents malformed addresses

✅ **Privacy Leaks**
- Referrer policy controls information sharing
- Permissions policy disables unnecessary APIs

## What's NOT Protected (by design)

❌ **DDoS Protection**: Netlify provides basic rate limiting, but advanced DDoS protection requires separate services

❌ **Advanced Bot Protection**: No CAPTCHA or rate limiting on contact form (uses native email client)

❌ **Database Security**: Not applicable - this is a static site with no database

❌ **Server-Side Security**: Not applicable - this is a client-side only application

## Contact Form Behavior

The contact form uses `mailto:` protocol:
- Opens user's default email client
- No data is stored on servers
- No backend processing required
- Recipient: info@nr-geo.sk

## Deployment Security

**Netlify Platform Security:**
- Automatic SSL/TLS certificates (Let's Encrypt)
- DDoS protection at CDN level
- Automatic security updates for platform
- Global CDN reduces single point of failure

## Monitoring & Updates

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security advisories: `npm audit`

### Recommended Periodic Checks
1. Review security headers using: https://securityheaders.com
2. Test CSP configuration
3. Verify HTTPS enforcement
4. Check for outdated dependencies

## Reporting Security Issues

If you discover a security vulnerability, please report it to:
- **Email**: info@nr-geo.sk
- **Subject**: "Security Issue Report - NR-GEO Website"

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Last Updated

**Date**: 2026-01-19
**Version**: 1.0.0

---

**Note**: This is a static website with minimal attack surface. Security measures are proportionate to the risk level and functionality requirements.
