# Full-Stack Developer Portfolio

A modern, minimal, and futuristic single-page portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Single Page Application** - Smooth scrolling navigation without routing
- **Modern Design** - Black & white theme with sophisticated animations
- **Fully Responsive** - Perfect display across desktop, tablet, and mobile
- **Framer Motion Animations** - Smooth, professional animations throughout
- **Modular Structure** - Clean, maintainable component architecture
- **Performance Optimized** - Fast loading and smooth interactions

## 📦 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn UI components
│   ├── Navbar.tsx          # Fixed navigation bar
│   └── sections/           # Main page sections
│       ├── Hero.tsx        # Landing section
│       ├── Projects.tsx    # Projects showcase
│       ├── Services.tsx    # Services offered
│       ├── About.tsx       # About me section
│       ├── Skills.tsx      # Technical skills
│       ├── Contact.tsx     # Contact form & info
│       └── Footer.tsx      # Footer section
├── data/
│   ├── projectsData.ts     # Projects information
│   └── servicesData.ts     # Services information
├── lib/
│   ├── animations.ts       # Reusable Framer Motion variants
│   └── utils.ts            # Utility functions
├── pages/
│   └── Index.tsx           # Main page component
└── index.css               # Global styles & design system
```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/sections/Hero.tsx`)
   - Update name, title, and tagline
   - Modify tech stack badges
   - Update social media links

2. **Projects** (`src/data/projectsData.ts`)
   - Add/edit your projects
   - Update images, descriptions, and tech stacks
   - Add live demo and GitHub links

3. **Services** (`src/data/servicesData.ts`)
   - Customize services you offer
   - Update descriptions

4. **About Section** (`src/components/sections/About.tsx`)
   - Update biography
   - Modify statistics

5. **Skills** (`src/components/sections/Skills.tsx`)
   - Add/remove your technical skills
   - Organize by categories

6. **Contact** (`src/components/sections/Contact.tsx`)
   - Update email address
   - Add your location
   - Update Upwork profile link

### Design System

All colors and styles are defined in:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

The theme uses:
- Black backgrounds (`--background`)
- White text (`--foreground`)
- Subtle gray accents (`--muted`, `--secondary`)

### Animation Variants

Reusable animation variants are in `src/lib/animations.ts`:
- `fadeIn` - Basic fade in
- `fadeInUp` - Fade in with upward motion
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `staggerContainer` - Stagger children animations
- `scaleIn` - Scale animation

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

Build the project and upload the `dist/` folder to any static hosting service.

## 📝 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt texts
- Clean URLs with smooth scrolling

Update SEO information in `index.html`.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, TailwindCSS & Framer Motion
