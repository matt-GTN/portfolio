# Modern Portfolio Website

My personal portfolio website built with Next.js 15, featuring interactive 3D backgrounds, glassmorphic design, smooth animations, and intelligent search functionality !

## ✨ Features

- **Interactive 3D Background**: Vanta.js bird simulation with customizable parameters and real-time interaction
- **Glassmorphic UI**: Modern design with backdrop blur effects and transparency layers
- **Smooth Animations**: Motion library (Framer Motion successor) for page transitions and micro-interactions
- **Intelligent Search**: Interactive pills with smart search functionality for skills, activities, and destinations
- **Multilingual Support**: Complete French/English translation system with language detection
- **Typewriter Effect**: Dynamic role descriptions with realistic typing animation
- **Modal Navigation**: Floating navbar with detailed content cards for each portfolio section
- **Responsive Design**: Mobile-first approach optimized for all screen sizes and devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, Tailwind CSS 4, and Motion 12
- **Personal Storytelling**: Beyond Code section with travel photos and personal achievements

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
- **p5.js 2.0.3** - Creative coding library for additional effects

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
│   ├── birds.svg         # Bird graphics for animations
│   ├── sevilla_1.jpg     # Travel photos for Beyond Code carousel
│   ├── sevilla_2.jpg     # Travel photos for Beyond Code carousel
│   └── sevilla_3.jpg     # Travel photos for Beyond Code carousel
└── config files         # Next.js, Tailwind, ESLint, PostCSS configs
```

## 🎨 Key Components

### Main Page (`app/page.js`)
- Hero section with animated background
- Typewriter effect for role descriptions
- Modal-based navigation system
- Responsive layout with glassmorphic cards

### Content Components
- **MeContent**: Personal information, values, and background
- **ProjectsContent**: Project showcase with GitHub links
- **SkillsContent**: Technical skills organized by category
- **ContactContent**: Contact information with copy-to-clipboard

### Interactive Elements
- **VantaBackground**: 3D bird simulation background with real-time interaction
- **Typewriter**: Animated text with realistic typing effect and cursor
- **DetailCard**: Modal cards with smooth transitions and glassmorphic design
- **Navbar**: Floating navigation with hover effects and spring animations
- **InteractivePill**: Smart searchable pills with Google/ChatGPT integration (skills, projects, activities, destinations)
- **LanguageToggle**: Smooth language switching with state persistence
- **Image Carousel**: Vertical photo carousel in Beyond Code section
- **Copy-to-Clipboard**: Interactive contact information copying

## 🎯 Portfolio Sections

1. **Me** - Personal background, core values, professional journey with searchable profile information and language skills
2. **Projects** - Featured projects including Stella (AI financial assistant), Zenyth (YouTube summarizer), and this portfolio with searchable technology badges
3. **Skills** - Technical expertise organized by categories with searchable technology pills:
   - Data Science & Analytics (Pandas, Numpy, Scikit-learn, etc.)
   - Agentic AI & Automation (LangChain, LangGraph, RAG, etc.)
   - Backend & Systems (Python, Docker, FastAPI, etc.)
   - Frontend & Prototyping (React, Next.js, Tailwind CSS, etc.)
   - Currently Learning (AWS Cloud, PyTorch, Vector Databases, etc.)
4. **Beyond Code** - Personal interests, hobbies, travel wishlist with searchable activity and destination pills
5. **Contact** - Multiple contact methods with copy-to-clipboard functionality and social links

## 🚀 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization

### Updating Content
- Edit content components in `components/content/`
- Update project data in `ProjectsContent.js`
- Modify skills in `SkillsContent.js`
- Change contact info in `ContactContent.js`
- Update translations in `translations/index.js`
- Configure search terms in `utils/searchConfig.js`

### Styling
- Customize colors in Tailwind config
- Modify glassmorphic effects in component classes (`bg-white/20 backdrop-blur-xs`)
- Update animations in Motion variants and transitions
- Adjust DaisyUI component themes and styles

### Background Effects
- Adjust Vanta.js parameters in `app/page.js`
- Change effect type (BIRDS, WAVES, etc.)
- Customize colors and animation speed

### Search & Internationalization
- Add new searchable terms in `utils/searchConfig.js`
- Configure search engines and behavior in `contexts/SearchContext.js`
- Update translations in `translations/index.js`
- Modify language detection logic in `contexts/LanguageContext.js`

## 🔍 Search & Internationalization Features

### Intelligent Search System
- **Interactive Pills**: Click any skill, project technology, activity, or destination to search
- **Smart Context**: Automatically generates relevant search terms based on content type and section
- **Multi-Engine Support**: Choose between Google and ChatGPT for different search experiences
- **Persistent Preferences**: Remembers your preferred search engine
- **Mobile Optimized**: Touch-friendly interactions with responsive design

### Multilingual Support
- **Complete Translation**: Every text element available in French and English
- **Automatic Detection**: Browser language detection with manual override
- **Context-Aware**: Search terms and results adapt to selected language
- **Smooth Transitions**: Language switching without page reload
- **Persistent State**: Language preference saved across sessions

## 🤖 AI Integration

This project includes Kiro AI assistant integration for enhanced development workflow:
- **Steering Documents**: AI guidance for technology stack, project structure, and product vision
- **Automated Workflows**: Hooks for documentation updates and code quality
- **Specifications**: Detailed feature specs for complex implementations
- **Code Analysis**: AI-powered code review and optimization suggestions
- **Documentation Sync**: Automatic updates to README and steering files based on project changes

## 📱 Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Optimized touch interactions for mobile devices
- Adaptive layouts for tablets and desktops
- Performance optimized with Next.js Image component

## 🔧 Development Notes

- **Next.js App Router**: Modern routing with server and client components
- **Client Components**: Interactive components marked with `"use client"` directive
- **Dynamic Imports**: Heavy libraries (Vanta.js) loaded with `ssr: false` for performance
- **Font Optimization**: Geist fonts loaded via Next.js font system
- **Animation Consistency**: Standardized hover transitions (`duration: 0.2, ease: "easeOut"`)
- **Code Quality**: ESLint 9 configuration with Next.js rules
- **Asset Organization**: Strategic placement of images and SVGs for optimal loading
- **Context Architecture**: React contexts for language and search state management
- **Search Intelligence**: Dynamic search term generation based on content analysis
- **Performance Optimized**: Lightweight implementation without testing overhead

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or feedback, please reach out through the contact information provided in the portfolio.
