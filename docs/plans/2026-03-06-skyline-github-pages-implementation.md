# Skyline GitHub Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a modern, static GitHub Pages site for Skyline BaaS platform showcasing core features with black-and-white tech aesthetic.

**Architecture:** HTML5 semantic structure with responsive CSS Grid/Flexbox layout, vanilla JavaScript for smooth scrolling, SVG graphics for technical diagrams, optimized for GitHub Pages static hosting.

**Tech Stack:** HTML5, CSS3 (Custom Properties, Grid, Flexbox), ES6+ JavaScript, Vite for development, GitHub Pages for deployment.

---

## Project Setup Phase

### Task 1: Initialize Project Structure

**Files:**
- Create: `index.html`
- Create: `styles/global.css`
- Create: `scripts/main.js`
- Create: `vite.config.js`
- Create: `package.json`
- Create: `.gitignore`

**Step 1: Create base HTML structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skyline - AI-Native BaaS Platform</title>
    <link rel="stylesheet" href="/styles/global.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300..700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>">
</head>
<body>
    <!-- Navigation will be added here -->
    <main>
        <!-- Hero section will be added here -->
    </main>
    <!-- Footer will be added here -->
    <script type="module" src="/scripts/main.js"></script>
</body>
</html>
```

**Step 2: Test HTML structure**

Run: `python -m http.server 8000` (or open with browser)
Expected: Empty page with correct title in browser tab

**Step 3: Initialize CSS variables and reset**

```css
/* styles/global.css */
:root {
    /* Color palette - black, white, 5-level grayscale */
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray-50: #f8f9fa;
    --color-gray-100: #e9ecef;
    --color-gray-200: #dee2e6;
    --color-gray-300: #adb5bd;
    --color-gray-500: #6c757d;

    /* Typography */
    --font-mono: 'Geist Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* Spacing (8px grid) */
    --space-1: 0.125rem;  /* 2px */
    --space-2: 0.25rem;   /* 4px */
    --space-4: 0.5rem;    /* 8px */
    --space-8: 1rem;      /* 16px */
    --space-12: 1.5rem;   /* 24px */
    --space-16: 2rem;     /* 32px */
    --space-24: 3rem;     /* 48px */
    --space-32: 4rem;     /* 64px */

    /* Layout */
    --container-max: 1280px;
    --border-radius: 0.5rem;
    --border-width: 1px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    line-height: 1.6;
    color: var(--color-black);
    background-color: var(--color-white);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

**Step 4: Test CSS setup**

Refresh browser
Expected: Page with basic styling, sans-serif font, black text on white background

**Step 5: Create package.json and Vite config**

```json
{
  "name": "skyline-github-pages",
  "version": "1.0.0",
  "description": "Skyline BaaS GitHub Pages site",
  "main": "index.html",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^6.3.5"
  }
}
```

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
```

**Step 6: Initialize development server**

Run: `npm install && npm run dev`
Expected: Vite server starts on http://localhost:3000

**Step 7: Commit project setup**

```bash
git add index.html styles/global.css scripts/main.js vite.config.js package.json .gitignore
git commit -m "feat: initialize GitHub Pages project structure"
```

---

## Navigation Component Phase

### Task 2: Create Navigation Bar

**Files:**
- Modify: `index.html` (add navigation)
- Modify: `styles/global.css` (add navigation styles)
- Modify: `scripts/main.js` (add smooth scrolling)

**Step 1: Add navigation HTML structure**

```html
<!-- In index.html, before <main> -->
<header class="header">
    <nav class="nav container">
        <div class="nav-brand">
            <div class="nav-logo">Skyline</div>
            <span class="nav-subtitle">BaaS Platform</span>
        </div>
        <ul class="nav-menu">
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#architecture" class="nav-link">Architecture</a></li>
            <li><a href="#tech-stack" class="nav-link">Tech Stack</a></li>
            <li><a href="#getting-started" class="nav-link">Get Started</a></li>
            <li><a href="https://github.com/skylineio/skyline" class="nav-link nav-link-external">GitHub ↗</a></li>
        </ul>
        <button class="nav-toggle" aria-label="Toggle navigation">
            <span class="nav-toggle-icon"></span>
        </button>
    </nav>
</header>
```

**Step 2: Test navigation HTML**

Refresh browser
Expected: Navigation bar appears with links (non-functional)

**Step 3: Add navigation CSS styles**

```css
/* styles/global.css - Navigation section */
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: var(--color-white);
    border-bottom: var(--border-width) solid var(--color-gray-100);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.95);
}

.container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--space-8);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--space-24);
    padding: var(--space-4) 0;
}

.nav-brand {
    display: flex;
    align-items: baseline;
    gap: var(--space-2);
}

.nav-logo {
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--color-black);
    letter-spacing: -0.02em;
}

.nav-subtitle {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    font-weight: 400;
}

.nav-menu {
    display: flex;
    gap: var(--space-8);
    list-style: none;
}

.nav-link {
    text-decoration: none;
    color: var(--color-gray-500);
    font-weight: 500;
    font-size: 0.875rem;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--border-radius);
    transition: all 0.2s ease;
}

.nav-link:hover {
    color: var(--color-black);
    background-color: var(--color-gray-50);
}

.nav-link-external {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    background-color: var(--color-black);
    color: var(--color-white);
    padding: var(--space-2) var(--space-8);
}

.nav-link-external:hover {
    background-color: var(--color-gray-500);
    color: var(--color-white);
}

.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-2);
}

.nav-toggle-icon {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--color-black);
    position: relative;
}

.nav-toggle-icon::before,
.nav-toggle-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: var(--color-black);
    left: 0;
}

.nav-toggle-icon::before {
    top: -6px;
}

.nav-toggle-icon::after {
    bottom: -6px;
}
```

**Step 4: Test navigation styling**

Refresh browser
Expected: Styled navigation with proper spacing, colors, hover effects

**Step 5: Add mobile responsive styles**

```css
/* styles/global.css - Mobile navigation */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: var(--space-24);
        left: 0;
        right: 0;
        background-color: var(--color-white);
        flex-direction: column;
        padding: var(--space-8);
        gap: var(--space-4);
        border-bottom: var(--border-width) solid var(--color-gray-100);
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
    }

    .nav-toggle {
        display: block;
    }

    .nav-link {
        padding: var(--space-4) var(--space-8);
        width: 100%;
        text-align: center;
    }
}
```

**Step 6: Test responsive navigation**

Resize browser to < 768px
Expected: Hamburger menu appears, navigation collapses

**Step 7: Add smooth scrolling JavaScript**

```javascript
// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle ARIA attributes
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu || !navToggle) return;

        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnToggle = navToggle.contains(e.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
```

**Step 8: Test smooth scrolling and mobile menu**

Click on navigation links, test mobile toggle
Expected: Smooth scrolling to sections, mobile menu opens/closes

**Step 9: Commit navigation component**

```bash
git add index.html styles/global.css scripts/main.js
git commit -m "feat: add responsive navigation with smooth scrolling"
```

---

## Hero Section Phase

### Task 3: Create Hero Section

**Files:**
- Modify: `index.html` (add hero section)
- Modify: `styles/global.css` (add hero styles)

**Step 1: Add hero HTML structure**

```html
<!-- In index.html, inside <main> -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-badge">AI-Native BaaS Platform</div>
            <h1 class="hero-title">Build Scalable AI Applications</h1>
            <p class="hero-description">
                Skyline provides backend services designed for modern AI applications.
                Multi-tenant architecture, built-in AI gateway, and enterprise-grade infrastructure.
            </p>
            <div class="hero-actions">
                <a href="#features" class="btn btn-primary">Explore Features</a>
                <a href="#getting-started" class="btn btn-outline">Get Started</a>
            </div>
            <div class="hero-metrics">
                <div class="metric">
                    <div class="metric-value">Multi-Tenant</div>
                    <div class="metric-label">Architecture</div>
                </div>
                <div class="metric">
                    <div class="metric-value">AI Gateway</div>
                    <div class="metric-label">Built-in</div>
                </div>
                <div class="metric">
                    <div class="metric-value">gRPC First</div>
                    <div class="metric-label">API Design</div>
                </div>
                <div class="metric">
                    <div class="metric-value">Event-Driven</div>
                    <div class="metric-label">System</div>
                </div>
            </div>
        </div>
        <div class="hero-visual">
            <!-- Abstract geometric pattern will be added via CSS -->
        </div>
    </div>
</section>
```

**Step 2: Test hero HTML**

Refresh browser
Expected: Hero content appears below navigation

**Step 3: Add hero CSS styles**

```css
/* styles/global.css - Hero section */
.hero {
    padding: var(--space-32) 0;
    overflow: hidden;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-32);
    align-items: center;
}

@media (min-width: 1024px) {
    .hero .container {
        grid-template-columns: 1fr 1fr;
    }
}

.hero-content {
    max-width: 600px;
}

.hero-badge {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-gray-500);
    background-color: var(--color-gray-50);
    padding: var(--space-2) var(--space-8);
    border-radius: 2rem;
    margin-bottom: var(--space-8);
    letter-spacing: 0.05em;
    text-transform: uppercase;
}

.hero-title {
    font-family: var(--font-mono);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: var(--space-8);
    letter-spacing: -0.03em;
}

.hero-description {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--color-gray-500);
    margin-bottom: var(--space-16);
    max-width: 500px;
}

.hero-actions {
    display: flex;
    gap: var(--space-8);
    margin-bottom: var(--space-32);
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-4) var(--space-16);
    border-radius: var(--border-radius);
    font-weight: 500;
    font-size: 0.875rem;
    text-decoration: none;
    transition: all 0.2s ease;
    border: var(--border-width) solid transparent;
    cursor: pointer;
    font-family: var(--font-sans);
}

.btn-primary {
    background-color: var(--color-black);
    color: var(--color-white);
}

.btn-primary:hover {
    background-color: var(--color-gray-500);
}

.btn-outline {
    background-color: transparent;
    color: var(--color-black);
    border-color: var(--color-gray-200);
}

.btn-outline:hover {
    border-color: var(--color-black);
    background-color: var(--color-gray-50);
}

.hero-metrics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-12);
}

@media (min-width: 640px) {
    .hero-metrics {
        grid-template-columns: repeat(4, 1fr);
    }
}

.metric {
    padding: var(--space-8);
    border: var(--border-width) solid var(--color-gray-100);
    border-radius: var(--border-radius);
    text-align: center;
}

.metric-value {
    font-family: var(--font-mono);
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: var(--space-2);
}

.metric-label {
    font-size: 0.875rem;
    color: var(--color-gray-500);
}

.hero-visual {
    position: relative;
    height: 400px;
}

.hero-visual::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: conic-gradient(
        from 0deg at 50% 50%,
        var(--color-gray-50) 0deg,
        var(--color-gray-100) 90deg,
        var(--color-gray-200) 180deg,
        var(--color-gray-100) 270deg,
        var(--color-gray-50) 360deg
    );
    border-radius: 50%;
    opacity: 0.8;
}

.hero-visual::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--color-gray-100) 10px,
        var(--color-gray-100) 20px
    );
    border-radius: 50%;
    opacity: 0.6;
}
```

**Step 4: Test hero styling**

Refresh browser
Expected: Hero section with proper typography, buttons, metrics, and geometric pattern

**Step 5: Add responsive hero adjustments**

```css
/* styles/global.css - Hero responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-description {
        font-size: 1rem;
    }

    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        width: 100%;
    }
}
```

**Step 6: Test responsive hero**

Resize browser to mobile size
Expected: Hero content adjusts appropriately

**Step 7: Commit hero section**

```bash
git add index.html styles/global.css
git commit -m "feat: add hero section with abstract geometric visualization"
```

---

## Features Section Phase

### Task 4: Create Features Grid

**Files:**
- Modify: `index.html` (add features section)
- Modify: `styles/global.css` (add features styles)

**Step 1: Add features HTML structure**

```html
<!-- In index.html, after hero section -->
<section id="features" class="section features">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Core Platform Features</h2>
            <p class="section-subtitle">Everything you need to build and scale AI applications</p>
        </div>
        <div class="features-grid">
            <!-- Feature 1: Multi-tenant Architecture -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M3 9h18"/>
                        <path d="M9 21V9"/>
                    </svg>
                </div>
                <h3 class="feature-title">Multi-tenant Architecture</h3>
                <p class="feature-description">User → Group → Project hierarchy with proper isolation and collaboration tools.</p>
                <ul class="feature-list">
                    <li>Three-level resource hierarchy</li>
                    <li>Role-based access control</li>
                    <li>Data isolation by tenant</li>
                </ul>
            </div>

            <!-- Feature 2: User Management -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                </div>
                <h3 class="feature-title">User Management</h3>
                <p class="feature-description">Complete authentication system with JWT tokens and refresh tokens.</p>
                <ul class="feature-list">
                    <li>JWT + refresh token auth</li>
                    <li>Complete user profiles</li>
                    <li>Session management</li>
                </ul>
            </div>

            <!-- Feature 3: File Storage -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                    </svg>
                </div>
                <h3 class="feature-title">File Storage</h3>
                <p class="feature-description">S3-compatible storage with Cloudflare R2 integration and presigned URLs.</p>
                <ul class="feature-list">
                    <li>S3-compatible API</li>
                    <li>Cloudflare R2 integration</li>
                    <li>Presigned URL generation</li>
                </ul>
            </div>

            <!-- Feature 4: AI Gateway -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                </div>
                <h3 class="feature-title">AI Gateway</h3>
                <p class="feature-description">AI model routing with custom authentication and rate limiting.</p>
                <ul class="feature-list">
                    <li>Model routing & load balancing</li>
                    <li>Custom auth providers</li>
                    <li>Usage tracking & metering</li>
                </ul>
            </div>

            <!-- Feature 5: Event-Driven System -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                    </svg>
                </div>
                <h3 class="feature-title">Event-Driven System</h3>
                <p class="feature-description">Kafka-based event system for asynchronous processing and real-time updates.</p>
                <ul class="feature-list">
                    <li>Kafka event streaming</li>
                    <li>Watermill integration</li>
                    <li>Real-time notifications</li>
                </ul>
            </div>

            <!-- Feature 6: Runtime Variables -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                    </svg>
                </div>
                <h3 class="feature-title">Runtime Variables</h3>
                <p class="feature-description">Dynamic configuration management with versioning and rollback support.</p>
                <ul class="feature-list">
                    <li>Dynamic configuration</li>
                    <li>Version history</li>
                    <li>Rollback capabilities</li>
                </ul>
            </div>

            <!-- Feature 7: Collections & Threads -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2"/>
                    </svg>
                </div>
                <h3 class="feature-title">Collections & Threads</h3>
                <p class="feature-description">Data organization with message threading and collection management.</p>
                <ul class="feature-list">
                    <li>Flexible data organization</li>
                    <li>Message threading</li>
                    <li>Collection CRUD operations</li>
                </ul>
            </div>

            <!-- Feature 8: Asset Exchange -->
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="m8 12 2-2 2 2 4-4"/>
                        <path d="M16 12h-4"/>
                    </svg>
                </div>
                <h3 class="feature-title">Asset Exchange</h3>
                <p class="feature-description">Transaction framework for asset management and exchange operations.</p>
                <ul class="feature-list">
                    <li>Transaction orchestration</li>
                    <li>Asset lifecycle management</li>
                    <li>Exchange operations</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test features HTML**

Refresh browser
Expected: 8 feature cards appear in a grid

**Step 3: Add features CSS styles**

```css
/* styles/global.css - Features section */
.section {
    padding: var(--space-32) 0;
}

.section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto var(--space-32);
}

.section-title {
    font-family: var(--font-mono);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--space-8);
    letter-spacing: -0.02em;
}

.section-subtitle {
    font-size: 1.125rem;
    color: var(--color-gray-500);
    line-height: 1.6;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-8);
}

.feature-card {
    padding: var(--space-12);
    border: var(--border-width) solid var(--color-gray-100);
    border-radius: var(--border-radius);
    background-color: var(--color-white);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.feature-card:hover {
    border-color: var(--color-gray-300);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}

.feature-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-50);
    border-radius: var(--border-radius);
    margin-bottom: var(--space-8);
    color: var(--color-black);
}

.feature-title {
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-4);
    color: var(--color-black);
}

.feature-description {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    line-height: 1.6;
    margin-bottom: var(--space-8);
    flex-grow: 1;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.feature-list li {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    padding: var(--space-2) 0;
    position: relative;
    padding-left: var(--space-8);
}

.feature-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--color-gray-300);
}
```

**Step 4: Test features styling**

Refresh browser
Expected: Feature cards with proper styling, hover effects, and icon styling

**Step 5: Add responsive features adjustments**

```css
/* styles/global.css - Features responsive */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
        gap: var(--space-8);
    }

    .feature-card {
        padding: var(--space-8);
    }
}
```

**Step 6: Test responsive features**

Resize browser to mobile size
Expected: Features grid becomes single column

**Step 7: Commit features section**

```bash
git add index.html styles/global.css
git commit -m "feat: add 8-core feature cards with hover effects and icons"
```

---

## Architecture Section Phase

### Task 5: Create Architecture Visualization

**Files:**
- Modify: `index.html` (add architecture section)
- Modify: `styles/global.css` (add architecture styles)

**Step 1: Add architecture HTML structure**

```html
<!-- In index.html, after features section -->
<section id="architecture" class="section architecture">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Three-Layer API Architecture</h2>
            <p class="section-subtitle">gRPC-first design with REST compatibility and SDK integration</p>
        </div>
        <div class="architecture-diagram">
            <!-- Architecture visualization will be added here -->
        </div>
        <div class="architecture-table">
            <table>
                <thead>
                    <tr>
                        <th>API Layer</th>
                        <th>Protocol</th>
                        <th>Authentication</th>
                        <th>Primary Use</th>
                        <th>Performance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>gRPC Services</strong></td>
                        <td>HTTP/2 + Protobuf</td>
                        <td>JWT Bearer Token</td>
                        <td>High-performance RPC</td>
                        <td>Best</td>
                    </tr>
                    <tr>
                        <td><strong>REST API</strong></td>
                        <td>HTTP/1.1 + JSON</td>
                        <td>JWT Bearer Token</td>
                        <td>Web compatibility</td>
                        <td>Good</td>
                    </tr>
                    <tr>
                        <td><strong>Developer API</strong></td>
                        <td>HTTP/1.1 + JSON</td>
                        <td>API Key</td>
                        <td>SDK integration</td>
                        <td>Good</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

**Step 2: Test architecture HTML**

Refresh browser
Expected: Architecture section with title and comparison table

**Step 3: Add architecture diagram CSS (static visualization)**

```css
/* styles/global.css - Architecture section */
.architecture-diagram {
    height: 300px;
    margin: var(--space-32) 0;
    position: relative;
    overflow: hidden;
}

.architecture-diagram::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom,
        transparent 0%,
        var(--color-gray-300) 10%,
        var(--color-gray-300) 90%,
        transparent 100%);
}

.architecture-node {
    position: absolute;
    width: 120px;
    padding: var(--space-4);
    border: var(--border-width) solid var(--color-gray-200);
    border-radius: var(--border-radius);
    background-color: var(--color-white);
    text-align: center;
    font-family: var(--font-mono);
    font-size: 0.875rem;
}

.architecture-node:nth-child(1) {
    top: 20%;
    left: 30%;
    border-color: var(--color-black);
    background-color: var(--color-gray-50);
}

.architecture-node:nth-child(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-color: var(--color-black);
    background-color: var(--color-white);
    width: 140px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.architecture-node:nth-child(3) {
    top: 20%;
    right: 30%;
    border-color: var(--color-gray-300);
}

.architecture-node::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--color-black);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.architecture-node:nth-child(1)::before {
    left: -18px;
}

.architecture-node:nth-child(3)::before {
    right: -18px;
}

.architecture-connector {
    position: absolute;
    height: 2px;
    background-color: var(--color-gray-300);
    top: 50%;
    transform: translateY(-50%);
}

.architecture-connector:nth-child(4) {
    left: calc(30% + 120px);
    width: calc(50% - 30% - 120px - 70px);
}

.architecture-connector:nth-child(5) {
    right: calc(30% + 120px);
    width: calc(50% - 30% - 120px - 70px);
}
```

**Step 4: Add HTML for architecture nodes and connectors**

```html
<!-- Update the .architecture-diagram div to include nodes -->
<div class="architecture-diagram">
    <div class="architecture-node">gRPC Services<br><small>Primary API</small></div>
    <div class="architecture-node">Core Business Logic</div>
    <div class="architecture-node">External APIs</div>
    <div class="architecture-connector"></div>
    <div class="architecture-connector"></div>
</div>
```

**Step 5: Add table styling**

```css
/* styles/global.css - Architecture table */
.architecture-table {
    overflow-x: auto;
    margin-top: var(--space-32);
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
}

thead {
    background-color: var(--color-gray-50);
    border-bottom: var(--border-width) solid var(--color-gray-200);
}

th {
    font-weight: 600;
    text-align: left;
    padding: var(--space-8) var(--space-4);
    color: var(--color-black);
    font-family: var(--font-mono);
}

td {
    padding: var(--space-8) var(--space-4);
    border-bottom: var(--border-width) solid var(--color-gray-100);
    color: var(--color-gray-500);
}

tbody tr:hover {
    background-color: var(--color-gray-50);
}

tbody tr:last-child td {
    border-bottom: none;
}

@media (max-width: 768px) {
    th, td {
        padding: var(--space-4) var(--space-2);
        font-size: 0.75rem;
    }
}
```

**Step 6: Test architecture styling**

Refresh browser
Expected: Architecture diagram and comparison table with proper styling

**Step 7: Commit architecture section**

```bash
git add index.html styles/global.css
git commit -m "feat: add architecture visualization and API comparison table"
```

---

## Tech Stack Section Phase

### Task 6: Create Tech Stack Showcase

**Files:**
- Modify: `index.html` (add tech stack section)
- Modify: `styles/global.css` (add tech stack styles)

**Step 1: Add tech stack HTML structure**

```html
<!-- In index.html, after architecture section -->
<section id="tech-stack" class="section tech-stack">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Technology Stack</h2>
            <p class="section-subtitle">Built with modern, production-ready technologies</p>
        </div>
        <div class="tech-categories">
            <!-- Backend Technologies -->
            <div class="tech-category">
                <h3 class="tech-category-title">Backend</h3>
                <div class="tech-grid">
                    <div class="tech-item">
                        <div class="tech-icon">Go</div>
                        <div class="tech-name">Go</div>
                        <div class="tech-description">High-performance server</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">gRPC</div>
                        <div class="tech-name">gRPC</div>
                        <div class="tech-description">RPC framework</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">PostgreSQL</div>
                        <div class="tech-name">PostgreSQL</div>
                        <div class="tech-description">Primary database</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">Redis</div>
                        <div class="tech-name">Redis</div>
                        <div class="tech-description">Caching & sessions</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">Kafka</div>
                        <div class="tech-name">Kafka</div>
                        <div class="tech-description">Event streaming</div>
                    </div>
                </div>
            </div>

            <!-- Frontend & Infrastructure -->
            <div class="tech-category">
                <h3 class="tech-category-title">Frontend & Infrastructure</h3>
                <div class="tech-grid">
                    <div class="tech-item">
                        <div class="tech-icon">React</div>
                        <div class="tech-name">React</div>
                        <div class="tech-description">Admin UI framework</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">Refine</div>
                        <div class="tech-name">Refine</div>
                        <div class="tech-description">B2B framework</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">Docker</div>
                        <div class="tech-name">Docker</div>
                        <div class="tech-description">Containerization</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">Traefik</div>
                        <div class="tech-name">Traefik</div>
                        <div class="tech-description">API gateway</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">R2</div>
                        <div class="tech-name">Cloudflare R2</div>
                        <div class="tech-description">Object storage</div>
                    </div>
                </div>
            </div>

            <!-- SDK Support -->
            <div class="tech-category">
                <h3 class="tech-category-title">SDK Support</h3>
                <div class="tech-grid">
                    <div class="tech-item">
                        <div class="tech-icon">TS</div>
                        <div class="tech-name">TypeScript SDK</div>
                        <div class="tech-description">@skyline/sdk package</div>
                    </div>
                    <div class="tech-item">
                        <div class="tech-icon">Go</div>
                        <div class="tech-name">Go SDK</div>
                        <div class="tech-description">gRPC clients</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test tech stack HTML**

Refresh browser
Expected: Tech stack categories with technology items

**Step 3: Add tech stack CSS styles**

```css
/* styles/global.css - Tech stack section */
.tech-categories {
    display: flex;
    flex-direction: column;
    gap: var(--space-32);
}

.tech-category-title {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--space-16);
    color: var(--color-black);
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: var(--space-8);
}

.tech-item {
    padding: var(--space-8);
    border: var(--border-width) solid var(--color-gray-100);
    border-radius: var(--border-radius);
    text-align: center;
    transition: all 0.2s ease;
}

.tech-item:hover {
    border-color: var(--color-gray-300);
    transform: translateY(-2px);
    background-color: var(--color-gray-50);
}

.tech-icon {
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: var(--space-4);
    color: var(--color-black);
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tech-name {
    font-weight: 600;
    margin-bottom: var(--space-2);
    color: var(--color-black);
    font-size: 0.875rem;
}

.tech-description {
    font-size: 0.75rem;
    color: var(--color-gray-500);
    line-height: 1.4;
}
```

**Step 4: Test tech stack styling**

Refresh browser
Expected: Tech items with proper grid layout and hover effects

**Step 5: Add responsive tech stack adjustments**

```css
/* styles/global.css - Tech stack responsive */
@media (max-width: 768px) {
    .tech-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: var(--space-4);
    }

    .tech-item {
        padding: var(--space-4);
    }

    .tech-category-title {
        font-size: 1.25rem;
    }
}
```

**Step 6: Test responsive tech stack**

Resize browser to mobile size
Expected: Tech grid adjusts to smaller columns

**Step 7: Commit tech stack section**

```bash
git add index.html styles/global.css
git commit -m "feat: add technology stack showcase with categorized grid layout"
```

---

## Getting Started Section Phase

### Task 7: Create Getting Started Guide

**Files:**
- Modify: `index.html` (add getting started section)
- Modify: `styles/global.css` (add getting started styles)

**Step 1: Add getting started HTML structure**

```html
<!-- In index.html, after tech stack section -->
<section id="getting-started" class="section getting-started">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Get Started with Skyline</h2>
            <p class="section-subtitle">Start building AI applications in minutes</p>
        </div>
        <div class="getting-started-steps">
            <!-- Step 1 -->
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3 class="step-title">Start Infrastructure</h3>
                    <p class="step-description">Launch PostgreSQL, Redis, and other required services using Docker Compose.</p>
                    <pre class="step-code"><code class="language-bash">task up</code></pre>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3 class="step-title">Apply Migrations</h3>
                    <p class="step-description">Initialize the database schema and apply all migrations.</p>
                    <pre class="step-code"><code class="language-bash">task migrate</code></pre>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3 class="step-title">Run the Server</h3>
                    <p class="step-description">Start the Skyline server with development configuration.</p>
                    <pre class="step-code"><code class="language-bash">task dev</code></pre>
                </div>
            </div>
        </div>

        <div class="getting-started-example">
            <h3 class="example-title">TypeScript SDK Example</h3>
            <pre class="example-code"><code class="language-typescript">import { Client } from '@skyline/sdk'

const client = new Client({
  protocol: 'http',
  baseURL: 'http://localhost:9099'
})

// Login with credentials
const response = await client.auth.login('user@example.com', 'password')
client.setAuthToken(response.token)

// Create a new group
const group = await client.groups.create({
  name: 'My AI Team',
  description: 'Working on AI applications'
})

console.log(`Created group: ${group.id}`)</code></pre>
        </div>

        <div class="getting-started-cta">
            <h3 class="cta-title">Ready to Build?</h3>
            <p class="cta-description">Check out the full documentation and start building your AI applications today.</p>
            <div class="cta-buttons">
                <a href="https://github.com/skylineio/skyline" class="btn btn-primary">View on GitHub</a>
                <a href="https://github.com/skylineio/skyline#readme" class="btn btn-outline">Read Documentation</a>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Test getting started HTML**

Refresh browser
Expected: Getting started steps, code example, and CTA section

**Step 3: Add getting started CSS styles**

```css
/* styles/global.css - Getting started section */
.getting-started-steps {
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-32);
}

.step {
    display: flex;
    gap: var(--space-16);
    align-items: flex-start;
}

.step-number {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-black);
    color: var(--color-white);
    border-radius: 50%;
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 1.25rem;
}

.step-content {
    flex-grow: 1;
}

.step-title {
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-4);
    color: var(--color-black);
}

.step-description {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    line-height: 1.6;
    margin-bottom: var(--space-8);
}

.step-code {
    background-color: var(--color-gray-50);
    border-radius: var(--border-radius);
    padding: var(--space-8);
    overflow-x: auto;
    margin: 0;
}

.step-code code {
    font-family: 'Geist Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
    font-size: 0.875rem;
    color: var(--color-black);
    line-height: 1.5;
}

.getting-started-example {
    margin-bottom: var(--space-32);
    padding: var(--space-16);
    background-color: var(--color-gray-50);
    border-radius: var(--border-radius);
}

.example-title {
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: var(--space-8);
    color: var(--color-black);
}

.example-code {
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    padding: var(--space-12);
    overflow-x: auto;
    margin: 0;
    border: var(--border-width) solid var(--color-gray-100);
}

.example-code code {
    font-family: 'Geist Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
    font-size: 0.875rem;
    color: var(--color-black);
    line-height: 1.5;
    display: block;
}

.getting-started-cta {
    text-align: center;
    padding: var(--space-32);
    border: var(--border-width) solid var(--color-gray-100);
    border-radius: var(--border-radius);
    background-color: var(--color-white);
}

.cta-title {
    font-family: var(--font-mono);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: var(--space-8);
    color: var(--color-black);
}

.cta-description {
    font-size: 1.125rem;
    color: var(--color-gray-500);
    line-height: 1.6;
    margin-bottom: var(--space-16);
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    gap: var(--space-8);
    justify-content: center;
}
```

**Step 4: Test getting started styling**

Refresh browser
Expected: Styled steps, code blocks, and CTA section

**Step 5: Add responsive getting started adjustments**

```css
/* styles/global.css - Getting started responsive */
@media (max-width: 768px) {
    .step {
        flex-direction: column;
        gap: var(--space-8);
    }

    .step-number {
        align-self: flex-start;
    }

    .step-code,
    .example-code {
        padding: var(--space-8);
        font-size: 0.75rem;
    }

    .cta-title {
        font-size: 1.5rem;
    }

    .cta-description {
        font-size: 1rem;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        width: 100%;
    }
}
```

**Step 6: Test responsive getting started**

Resize browser to mobile size
Expected: Steps become vertical, CTA buttons stack

**Step 7: Commit getting started section**

```bash
git add index.html styles/global.css
git commit -m "feat: add getting started guide with code examples and CTA"
```

---

## Footer & Project Links Phase

### Task 8: Create Footer and Project Links

**Files:**
- Modify: `index.html` (add footer)
- Modify: `styles/global.css` (add footer styles)

**Step 1: Add footer HTML structure**

```html
<!-- In index.html, before closing </main> -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="footer-logo">Skyline</div>
                <p class="footer-tagline">AI-Native BaaS Platform</p>
                <p class="footer-copyright">© 2026 Skyline BaaS. All rights reserved.</p>
            </div>

            <div class="footer-links">
                <div class="footer-column">
                    <h4 class="footer-column-title">Project</h4>
                    <ul class="footer-link-list">
                        <li><a href="https://github.com/skylineio/skyline">GitHub Repository</a></li>
                        <li><a href="https://github.com/skylineio/skyline/issues">Issue Tracker</a></li>
                        <li><a href="https://github.com/skylineio/skyline/pulls">Pull Requests</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4 class="footer-column-title">Documentation</h4>
                    <ul class="footer-link-list">
                        <li><a href="https://github.com/skylineio/skyline#readme">README</a></li>
                        <li><a href="https://github.com/skylineio/skyline/blob/main/CLAUDE.md">Development Guide</a></li>
                        <li><a href="https://github.com/skylineio/skyline/blob/main/AGENTS.md">Agents</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4 class="footer-column-title">Community</h4>
                    <ul class="footer-link-list">
                        <li><a href="https://github.com/skylineio">Organization</a></li>
                        <li><a href="https://github.com/sponsors/qiulin">Sponsor</a></li>
                        <li><a href="mailto:qlin.dev@outlook.com">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-license">
                Licensed under <a href="https://github.com/skylineio/skyline/blob/main/LICENSE">MIT License</a>
            </div>
            <div class="footer-attribution">
                Built with ❤️ by the Skyline team
            </div>
        </div>
    </div>
</footer>
```

**Step 2: Test footer HTML**

Refresh browser
Expected: Footer appears at bottom of page

**Step 3: Add footer CSS styles**

```css
/* styles/global.css - Footer section */
.footer {
    background-color: var(--color-gray-50);
    border-top: var(--border-width) solid var(--color-gray-100);
    padding: var(--space-32) 0;
    margin-top: var(--space-32);
}

.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-32);
    margin-bottom: var(--space-32);
}

@media (min-width: 768px) {
    .footer-grid {
        grid-template-columns: 2fr 3fr;
    }
}

.footer-brand {
    max-width: 300px;
}

.footer-logo {
    font-family: var(--font-mono);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: var(--space-4);
    color: var(--color-black);
}

.footer-tagline {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    margin-bottom: var(--space-8);
}

.footer-copyright {
    font-size: 0.75rem;
    color: var(--color-gray-500);
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-16);
}

.footer-column-title {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: var(--space-8);
    color: var(--color-black);
}

.footer-link-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-link-list li {
    margin-bottom: var(--space-4);
}

.footer-link-list a {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-link-list a:hover {
    color: var(--color-black);
}

.footer-bottom {
    padding-top: var(--space-16);
    border-top: var(--border-width) solid var(--color-gray-200);
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    text-align: center;
}

@media (min-width: 768px) {
    .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
}

.footer-license,
.footer-attribution {
    font-size: 0.75rem;
    color: var(--color-gray-500);
}

.footer-license a {
    color: var(--color-gray-500);
    text-decoration: underline;
}

.footer-license a:hover {
    color: var(--color-black);
}
```

**Step 4: Test footer styling**

Refresh browser
Expected: Styled footer with proper grid layout and link styling

**Step 5: Test page complete scroll**

Scroll through entire page
Expected: Smooth navigation between all sections, footer at bottom

**Step 6: Commit footer section**

```bash
git add index.html styles/global.css
git commit -m "feat: add footer with project links and attribution"
```

---

## Performance & Optimization Phase

### Task 9: Optimize Performance and Accessibility

**Files:**
- Modify: `index.html` (add meta tags, ARIA)
- Modify: `styles/global.css` (optimize CSS)
- Modify: `scripts/main.js` (add performance optimizations)

**Step 1: Add critical meta tags and ARIA attributes**

```html
<!-- Update head section in index.html -->
<head>
    <!-- Existing meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Add new meta tags -->
    <meta name="description" content="Skyline - AI-Native BaaS Platform for building scalable AI applications. Multi-tenant architecture, built-in AI gateway, enterprise-grade infrastructure.">
    <meta name="keywords" content="AI,BaaS,backend,cloud,platform,gRPC,TypeScript,Go,PostgreSQL,Redis">
    <meta name="author" content="Skyline Team">
    <meta property="og:title" content="Skyline - AI-Native BaaS Platform">
    <meta property="og:description" content="Backend services designed for modern AI applications">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://skylineio.github.io">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Skyline - AI-Native BaaS Platform">
    <meta name="twitter:description" content="Build scalable AI applications with enterprise-grade backend services">

    <!-- Existing links -->
    <link rel="stylesheet" href="/styles/global.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300..700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>">
</head>
```

**Step 2: Add ARIA labels and roles**

```html
<!-- Update navigation toggle button -->
<button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="nav-menu">
    <span class="nav-toggle-icon"></span>
</button>

<!-- Update nav menu with ID -->
<ul class="nav-menu" id="nav-menu" role="navigation">
    <!-- Existing menu items -->
</ul>

<!-- Add skip to main content link -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

**Step 3: Add skip link CSS**

```css
/* styles/global.css - Accessibility */
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-black);
    color: var(--color-white);
    padding: var(--space-4) var(--space-8);
    text-decoration: none;
    z-index: 1001;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
}

.skip-link:focus {
    top: var(--space-4);
    outline: 2px solid var(--color-black);
    outline-offset: 2px;
}

/* Ensure all interactive elements have focus styles */
button:focus,
a:focus,
input:focus,
textarea:focus,
select:focus {
    outline: 2px solid var(--color-black);
    outline-offset: 2px;
    border-radius: var(--border-radius);
}

/* Improve contrast for links */
a {
    color: var(--color-black);
}

/* Ensure sufficient color contrast */
@media (prefers-contrast: high) {
    :root {
        --color-gray-50: #ffffff;
        --color-gray-100: #f0f0f0;
        --color-gray-200: #e0e0e0;
        --color-gray-300: #909090;
        --color-gray-500: #404040;
    }
}
```

**Step 4: Add main content landmark**

```html
<!-- Update main tag -->
<main id="main-content" role="main">
    <!-- Existing content -->
</main>
```

**Step 5: Optimize JavaScript for performance**

```javascript
// scripts/main.js - Optimize event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Use passive event listeners for better scrolling performance
    const supportsPassive = (() => {
        let supports = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get: () => { supports = true; }
            });
            window.addEventListener('test', null, opts);
            window.removeEventListener('test', null, opts);
        } catch (e) {}
        return supports;
    })();

    // Smooth scrolling with passive listener
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }, supportsPassive ? { passive: true } : false);
    });

    // Debounce resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle responsive behaviors if needed
        }, 250);
    }, supportsPassive ? { passive: true } : false);

    // Existing mobile menu code...
});
```

**Step 6: Test accessibility and performance**

Run: Open browser DevTools, check Lighthouse audit
Expected: Good scores for accessibility and performance

**Step 7: Commit optimizations**

```bash
git add index.html styles/global.css scripts/main.js
git commit -m "feat: optimize performance and accessibility with ARIA, meta tags, and passive listeners"
```

---

## Deployment Phase

### Task 10: Prepare for GitHub Pages Deployment

**Files:**
- Create: `.github/workflows/deploy.yml`
- Create: `404.html`
- Modify: `vite.config.js` (update for GitHub Pages)
- Modify: `package.json` (add deployment scripts)

**Step 1: Create GitHub Actions workflow**

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Step 2: Create custom 404 page**

```html
<!-- 404.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Skyline BaaS</title>
    <link rel="stylesheet" href="/styles/global.css">
    <style>
        .error-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: var(--space-8);
        }

        .error-content {
            max-width: 500px;
        }

        .error-code {
            font-family: var(--font-mono);
            font-size: 6rem;
            font-weight: 700;
            margin-bottom: var(--space-4);
            color: var(--color-black);
        }

        .error-message {
            font-size: 1.5rem;
            margin-bottom: var(--space-8);
            color: var(--color-gray-500);
        }

        .error-description {
            margin-bottom: var(--space-16);
            color: var(--color-gray-500);
        }
    </style>
</head>
<body>
    <div class="error-container">
        <div class="error-content">
            <div class="error-code">404</div>
            <h1 class="error-message">Page Not Found</h1>
            <p class="error-description">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </div>
</body>
</html>
```

**Step 3: Update Vite config for GitHub Pages**

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        404: '404.html'
      }
    }
  }
})
```

**Step 4: Update package.json scripts**

```json
{
  "name": "skyline-github-pages",
  "version": "1.0.0",
  "description": "Skyline BaaS GitHub Pages site",
  "main": "index.html",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "vite": "^6.3.5",
    "gh-pages": "^6.2.0"
  }
}
```

**Step 5: Test build process**

Run: `npm run build`
Expected: `dist/` folder created with built files

**Step 6: Test local preview**

Run: `npm run preview`
Expected: Preview server starts with built site

**Step 7: Create README.md for deployment**

```markdown
# Skyline GitHub Pages

This is the GitHub Pages site for [Skyline BaaS Platform](https://github.com/skylineio/skyline).

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview built site
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

Manual deployment:
```bash
npm run deploy
```

## Structure

- `index.html` - Main page
- `404.html` - Custom 404 page
- `styles/global.css` - Global styles
- `scripts/main.js` - JavaScript functionality
- `docs/plans/` - Design and implementation plans

## License

MIT
```

**Step 8: Commit deployment configuration**

```bash
git add .github/workflows/deploy.yml 404.html vite.config.js package.json README.md
git commit -m "feat: add GitHub Pages deployment configuration and 404 page"
```

---

## Final Testing Phase

### Task 11: Final Testing and Validation

**Files:**
- All project files

**Step 1: Run Lighthouse audit**

Open browser DevTools → Lighthouse → Generate report
Expected: Performance > 90, Accessibility > 90, Best Practices > 90, SEO > 90

**Step 2: Test responsive design**

Test on multiple viewports (320px, 768px, 1024px, 1280px+)
Expected: Layout adapts correctly, no horizontal scrollbars

**Step 3: Test navigation**

Test all navigation links, mobile menu toggle, smooth scrolling
Expected: All links work, mobile menu opens/closes, smooth scrolling works

**Step 4: Test accessibility**

Use keyboard navigation, screen reader if available
Expected: All interactive elements keyboard accessible, proper ARIA labels

**Step 5: Test browser compatibility**

Test in Chrome, Firefox, Safari, Edge
Expected: Consistent appearance and functionality

**Step 6: Run final build and preview**

Run: `npm run build && npm run preview`
Expected: Production build works correctly

**Step 7: Create final summary commit**

```bash
git add .
git commit -m "feat: complete Skyline GitHub Pages site with all sections"
```

---

## Plan Complete

Plan complete and saved to `docs/plans/2026-03-06-skyline-github-pages-implementation.md`.

**Two execution options:**

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

**Which approach?**

**If Subagent-Driven chosen:**
- **REQUIRED SUB-SKILL:** Use superpowers:subagent-driven-development
- Stay in this session
- Fresh subagent per task + code review

**If Parallel Session chosen:**
- Guide them to open new session in worktree
- **REQUIRED SUB-SKILL:** New session uses superpowers:executing-plans