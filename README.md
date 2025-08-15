# Modern Portfolio Website

A stunning personal portfolio website built with Next.js 15, featuring interactive 3D backgrounds, glassmorphic design, and smooth animations. This portfolio showcases projects, skills, and professional background through an engaging modal-based navigation system.

## ✨ Features

- **Interactive 3D Background**: Vanta.js bird simulation with customizable parameters
- **Glassmorphic UI**: Modern design with backdrop blur effects and transparency
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Typewriter Effect**: Dynamic role descriptions with typing animation
- **Modal Navigation**: Detailed content cards for each portfolio section
- **Responsive Design**: Optimized for all screen sizes and devices
- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS

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
- **Next.js 15.4.3** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **Node.js** - JavaScript runtime

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **DaisyUI 5.0.46** - Component library for Tailwind
- **Geist Font** - Modern typography (Sans & Mono)

### Animation & Effects
- **Framer Motion 12.23.7** - Advanced animation library
- **Vanta.js 0.5.24** - 3D background effects
- **Three.js 0.125.2** - 3D graphics engine
- **p5.js 2.0.3** - Creative coding library

### Icons & Utilities
- **Lucide React 0.525.0** - Beautiful icon library
- **tailwind-merge 3.3.1** - Utility class merging

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main homepage component
│   ├── globals.css        # Global styles with Tailwind
│   └── favicon.ico        # Site favicon
├── components/            # React components
│   ├── content/          # Content components for each section
│   │   ├── MeContent.js         # About me section
│   │   ├── ProjectsContent.js   # Projects showcase
│   │   ├── SkillsContent.js     # Skills and expertise
│   │   └── ContactContent.js    # Contact information
│   ├── svg/              # Custom SVG components
│   │   ├── Stella.js            # Project logo/icon
│   │   └── Zenyth.js            # Project logo/icon
│   ├── DetailCard.js     # Modal card component
│   ├── Navbar.js         # Navigation bar
│   ├── NavbarItem.js     # Individual nav items
│   ├── Typewriter.js     # Typewriter animation
│   ├── VantaBackground.js # 3D background wrapper
│   └── _VantaClient.js   # Vanta.js client component
├── public/               # Static assets
│   ├── avatar.png        # Profile avatar
│   ├── avatar_stella.svg # Alternative avatar
│   └── *.svg            # Various graphics
├── .kiro/               # AI assistant configuration
│   ├── hooks/           # Automated workflows
│   └── steering/        # AI guidance documents
└── config files         # Next.js, Tailwind, ESLint configs
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
- **VantaBackground**: 3D bird simulation background
- **Typewriter**: Animated text with typing effect
- **DetailCard**: Modal cards with smooth transitions
- **Navbar**: Floating navigation with hover effects

## 🎯 Portfolio Sections

1. **About Me** - Personal background, core values, and professional journey
2. **Projects** - Featured projects with live demos and GitHub links
3. **Skills** - Technical expertise categorized by domain
4. **Fun Stuff** - Personal interests and hobbies
5. **Contact** - Multiple ways to get in touch

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

### Styling
- Customize colors in Tailwind config
- Modify glassmorphic effects in component classes
- Update animations in Framer Motion variants

### Background Effects
- Adjust Vanta.js parameters in `app/page.js`
- Change effect type (BIRDS, WAVES, etc.)
- Customize colors and animation speed

## 🤖 AI Integration

This project includes Kiro AI assistant integration:
- **Auto-README Updates**: Automatically updates documentation
- **Code Analysis**: AI-powered code review and suggestions
- **Project Guidance**: Steering documents for consistent development

## 📱 Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Optimized touch interactions for mobile devices
- Adaptive layouts for tablets and desktops
- Performance optimized with Next.js Image component

## 🔧 Development Notes

- Uses Next.js App Router for modern routing
- Client components marked with `"use client"` directive
- Dynamic imports for heavy libraries (Vanta.js)
- Optimized fonts with Next.js font system
- ESLint configuration for code quality

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or feedback, please reach out through the contact information provided in the portfolio.
