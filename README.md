# Cashback Loans - Documentation Guides

A clean, mobile-optimized static documentation site featuring guides for the Cashback Loans PWA app and web portal.

## 🚀 Features

- **Mobile-First Design**: Responsive navigation with hamburger menu
- **Two Guide Pages**:
  - PWA App Guide - Instructions for mobile app usage
  - Portal Guide - Web portal usage instructions
- **Clean & Professional**: Simple, easy-to-navigate interface
- **Print-Friendly**: Both guides support printing

## 📱 Live Demo

Visit the live site: [Your Vercel URL will be here]

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## 🏃‍♂️ Running Locally

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

## 📦 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite and deploy!

## 📁 Project Structure

```
src/
├── app/
│   ├── layout/
│   │   └── SimpleLayout.tsx    # Mobile-optimized navbar
│   ├── pages/
│   │   ├── PWA_app_guide_v2.tsx
│   │   └── portal_visual_guide.tsx
│   ├── App.tsx
│   └── router.tsx
├── styles/
│   └── globals.css
└── main.tsx
```

## 🌐 Routes

- `/` - PWA App Guide (default)
- `/guides/pwa-app` - PWA App Guide
- `/guides/portal` - Portal Guide

## 📝 License

© 2026 Cashback Loans. All rights reserved.
