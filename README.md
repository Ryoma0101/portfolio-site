# Portfolio Site

A modern, customizable portfolio website built with Astro, React, and shadcn/ui components.

![Portfolio Preview](https://github.com/user-attachments/assets/44c47034-06e4-412a-b9dd-014593b32215)

## ✨ Features

- 🎨 Modern UI with shadcn/ui components
- 🌓 Multiple theme support (Orange, Blue, Red, Green, Cyber, Pink)
- 📱 Fully responsive design
- 🎭 Smooth animations
- 🖨️ Print-friendly layout
- ⚡ Built with Astro for optimal performance
- 🎯 TypeScript support
- 🎨 Tailwind CSS for styling

## 🛠️ Tech Stack

- [**Astro**](https://astro.build/) - Modern web framework
- [**React**](https://react.dev/) - UI component library
- [**TypeScript**](https://www.typescriptlang.org/) - Type-safe JavaScript
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework
- [**shadcn/ui**](https://ui.shadcn.com/) - Re-usable component library
- [**Iconify**](https://iconify.design/) - Universal icon framework
- [**FancyBox**](https://fancyapps.com/fancybox/) - Lightbox library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ryoma0101/portfolio-site.git
cd portfolio-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Customization

### Personal Information

Edit the data directly in `src/pages/index.astro`:

```typescript
const basics = {
  name: "Your Name",
  email: "your.email@example.com",
  summary: "Your bio...",
  theme: "Orange", // or "Blue", "Red", "Green", "Cyber", "Pink"
  // ... more fields
};
```

### Sections

The main content sections are defined in `src/pages/index.astro`:

- **basics** - Personal information and contact details
- **education** - Educational background
- **certificates** - Certifications and awards
- **work** - Work experience
- **affiliation** - Community involvement and activities
- **skills** - Technical skills and proficiencies
- **projects** - Portfolio projects

### Themes

Change the `theme` property in the `basics` object to one of:

- `Orange` (default)
- `Blue`
- `Red`
- `Green`
- `Cyber`
- `Pink`

Custom themes can be added by extending the CSS variables in `src/globals.css`.

## 🧞 Commands

| Command                  | Action                                       |
| ------------------------ | -------------------------------------------- |
| `pnpm dev`               | Start development server at `localhost:4321` |
| `pnpm build`             | Build production site to `./dist/`           |
| `pnpm preview`           | Preview production build locally             |
| `pnpm deploy:vercel`     | Deploy to Vercel                             |
| `pnpm deploy:cloudflare` | Deploy to Cloudflare Pages                   |

## 📦 Project Structure

```
portfolio-site/
├── public/              # Static assets
│   └── avatar.png      # Profile image
├── src/
│   ├── components/
│   │   ├── ui/         # shadcn/ui components
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   └── ArtPlums.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts    # Utility functions
│   ├── pages/
│   │   └── index.astro # Main portfolio page
│   └── globals.css     # Global styles & theme variables
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 🎨 Component Library

This project uses shadcn/ui components adapted for Astro:

- **Card** - Container component with header, content, and footer
- **Badge** - Small status indicators and tags
- More components can be added as needed

## 📄 License

This project is [MIT](./LICENSE) licensed.

## 🙏 Acknowledgments

- Original design inspiration from [dev-portfolio](https://github.com/Smilesharks/dev-portfolio)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Iconify](https://iconify.design/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Ryoma Ohtani - [@d7zPa0NDyA59529](https://x.com/d7zPa0NDyA59529)

Project Link: [https://github.com/Ryoma0101/portfolio-site](https://github.com/Ryoma0101/portfolio-site)
