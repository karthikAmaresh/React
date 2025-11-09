# Portfolio Website - Shweta Mandwale

A modern, animated React portfolio website with smooth scroll effects and interactive components.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

To verify your installations, run:
```bash
node --version
npm --version
git --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/karthikAmaresh/React.git
cd React
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- `react` (^18.3.1) - UI library
- `react-dom` (^18.3.1) - React DOM renderer
- `react-router-dom` (^6.26.0) - Routing library
- `vite` (^5.4.2) - Build tool and dev server
- `@vitejs/plugin-react` (^4.3.1) - Vite React plugin
- `@types/react` (^18.3.3) - TypeScript types for React
- `@types/react-dom` (^18.3.0) - TypeScript types for React DOM

### 3. Start Development Server

```bash
npm run dev
```

The application will start at: **http://localhost:5173/**

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## Features

✨ **Animations & Effects:**
- Landing page fade-in animations
- Scroll-triggered puzzle pieces animation
- Dynamic navbar with growing progress line
- Smooth section transitions
- Interactive hover effects

🎨 **Design:**
- Dark theme with gradient backgrounds
- Cyan accent colors (#00d4ff)
- Clean, modern UI with bordered sections
- Fully responsive design

📱 **Sections:**
- **Hero:** Landing animation with design principles and red boxes
- **Navigation:** Sticky navbar with scroll progress line
- **About:** Work experience, industry exposure, education with profile and skill chips
- **Projects:** Project cards, research paper section, credentials
- **Contact:** Contact form, social links, and footer

## Technology Stack

- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool and dev server
- **CSS3** - Styling with animations and transitions
- **React Hooks** - State management (useState, useEffect)

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with scroll detection
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Landing page with animations
│   │   ├── Hero.css
│   │   ├── About.jsx           # About section with experience
│   │   ├── About.css
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx         # Contact form and footer
│   │   └── Contact.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
# If port 5173 is occupied, Vite will automatically use the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

**Dependencies Installation Failed:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Module Not Found Errors:**
```bash
# Ensure all dependencies are installed
npm install
# Restart the dev server
npm run dev
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally

## Customization

### Colors
Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-bg: #0a1929;      /* Main background */
  --secondary-bg: #132f4c;    /* Secondary background */
  --accent-color: #00d4ff;    /* Cyan accent */
  --text-primary: #ffffff;    /* Main text */
  --text-secondary: #b0bec5;  /* Secondary text */
  --red-accent: #ff0000;      /* Red accent boxes */
}
```

### Content
Update the following files to add your content:
- `src/components/Hero.jsx` - Name, tagline, design principles
- `src/components/About.jsx` - Work experience, skills, education
- `src/components/Projects.jsx` - Project cards and details
- `src/components/Contact.jsx` - Contact information and social links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - Feel free to use this template for your own portfolio!

## Contact

For any questions or issues, please open an issue on GitHub.

---

**Built with ❤ and intention**
