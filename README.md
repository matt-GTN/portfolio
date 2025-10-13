# Modern Portfolio Website

My personal portfolio website built with Next.js 15, featuring interactive 3D backgrounds, glassmorphic design, smooth animations, and intelligent search functionality !

## ✨ Features

- **Intelligent Search**: Interactive pills with smart ChatGPT search functionality for skills, activities, and destinations
- **Multilingual Support**: Complete French/English translation system with language detection
- **Typewriter Effect**: Dynamic role descriptions with realistic typing animation
- **Responsive Design**: Mobile-first approach optimized for all screen sizes and devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, Tailwind CSS 4, and Motion 12

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.4.3** - React framework with App Router and latest features
- **React 19.1.0** - Latest React with concurrent features and improved performance
- **Node.js** - JavaScript runtime environment

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework with PostCSS integration
- **DaisyUI 5.0.46** - Component library for Tailwind with carousel, badges, and more
- **Geist Font** - Modern typography (Sans & Mono variants)

### Animation & Effects
- **Motion 12.23.7** - Advanced animation library (Framer Motion successor)
- **Vanta.js 0.5.24** - 3D background effects with bird simulation
- **Three.js 0.125.2** - 3D graphics engine (Vanta dependency)

### Icons & Utilities
- **Lucide React 0.525.0** - Beautiful, customizable icon library
- **tailwind-merge 3.3.1** - Utility for merging Tailwind classes efficiently

### Internationalization & Search
- **Custom Translation System** - Complete French/English support with context-aware translations
- **Interactive Search** - Smart pill-based search functionality with Google and ChatGPT integration
- **Language Detection** - Automatic browser language detection with manual toggle

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main homepage component
│   ├── globals.css        # Global styles with Tailwind imports
│   └── favicon.ico        # Site favicon
├── components/            # React components
│   ├── content/          # Content components for each portfolio section
│   │   ├── MeContent.js         # About me section with values and background
│   │   ├── ProjectsContent.js   # Projects showcase with GitHub integration
│   │   ├── SkillsContent.js     # Skills and expertise by category
│   │   ├── BeyondCodeContent.js # Personal interests and achievements
│   │   └── ContactContent.js    # Contact information with copy functionality
│   ├── svg/              # Custom SVG components and graphics
│   │   ├── Birds.js             # Bird animation SVG for portfolio project
│   │   └── Zenyth.js            # Zenyth project logo/icon
│   ├── vanta/            # Vanta.js 3D background components
│   │   ├── VantaBackground.js   # Background wrapper component
│   │   └── _VantaClient.js      # Client-side Vanta component
│   ├── DetailCard.js     # Modal card component with animations
│   ├── Navbar.js         # Floating navigation bar with hover effects
│   ├── NavbarItem.js     # Individual navigation items
│   ├── Typewriter.js     # Typewriter animation effect
│   ├── GitHubButton.js   # GitHub repository link button
│   ├── CallToActionButton.js # Reusable CTA button component
│   ├── InteractivePill.js # Smart searchable pill component
│   └── LanguageToggle.js # Language switcher component
├── contexts/             # React contexts
│   ├── LanguageContext.js # Language state and translation management
│   └── SearchContext.js  # Search functionality and engine selection
├── translations/         # Internationalization
│   └── index.js          # Complete French/English translations
├── utils/               # Utility functions
│   └── searchConfig.js   # Search configuration and pill intelligence
├── public/               # Static assets
│   ├── avatar.png        # Main profile avatar
│   ├── avatar_stella.png # Stella project avatar
│   └── birds.svg         # Bird graphics
└── config files         # Next.js, Tailwind, ESLint, PostCSS configs
```

## 🎯 Portfolio Sections

1. **Me** - Personal background, core values, professional journey with searchable profile information and language skills
2. **Projects** - Featured projects including Stella (AI financial assistant), Zenyth (YouTube summarizer), and this portfolio with searchable technology badges
3. **Skills** - Technical expertise organized by categories with searchable technology pills
4. **Beyond Code** - Personal interests, hobbies, travel wishlist with searchable activity and destination pills
5. **Contact** - Multiple contact methods with copy-to-clipboard functionality and social links

## 📄 License

This project is open and under MIT License.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or feedback, please reach out through the contact information provided in the portfolio.
