# Portfolio Website - Shweta Mandwale

A modern, animated React portfolio website with smooth scroll effects and interactive components.

## Features

✨ **Animations & Effects:**
- Landing page fade-in animations for hero text and icon
- Scroll-triggered puzzle pieces animation
- Dynamic text opacity changes based on scroll position
- Smooth navigation transitions with active state indicators
- Hover effects on navigation items with animated underlines

🎨 **Design:**
- Dark theme with gradient backgrounds
- Cyan/blue accent colors (#00d4ff, #5b9cff)
- Clean, modern UI with glassmorphism effects
- Fully responsive design for all screen sizes

📱 **Sections:**
- **Hero Section:** Landing animation with tagline, scroll-triggered content
- **Navigation:** Sticky navbar with smooth scroll and active states
- **About:** Work experience, industry exposure, education with profile image
- **Projects:** Grid layout with 4 project cards, research paper section, credentials
- **Contact:** Contact form, social links, and footer

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and transitions
- **React Hooks** - State management (useState, useEffect)

## Installation

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

## Key Animations

### Landing Page (On Load)
- Hero icon fades in with delay
- "Hi!" greeting appears
- Name with gradient text effect
- Tagline slides up
- All with staggered animation delays

### Scroll-Triggered
- "I Design With" text opacity increases from 20% to 50% as you scroll
- Puzzle pieces slide in from left and right when scrolling past 100px
- Navigation bar changes style when scrolled past 50px

### Interactive Elements
- Navigation items: underline animation on hover/active
- Project cards: lift effect on hover with glowing border
- Buttons: scale and shadow effects
- Form inputs: glow effect on focus

## Customization

### Colors
Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-bg: #0a1929;      /* Main background */
  --secondary-bg: #132f4c;    /* Secondary background */
  --accent-color: #00d4ff;    /* Cyan accent */
  --accent-blue: #5b9cff;     /* Blue accent */
  --text-primary: #ffffff;    /* Main text */
  --text-secondary: #b0bec5;  /* Secondary text */
  --red-accent: #ff0000;      /* Red accent */
}
```

### Content
Update the following files to add your content:
- `Hero.jsx` - Your name and tagline
- `About.jsx` - Work experience, skills, education
- `Projects.jsx` - Project details and descriptions
- `Contact.jsx` - Contact information and social links

## Development URL

The application runs at: **http://localhost:5173/**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your own portfolio!

---

**Built with ❤ and intention**
