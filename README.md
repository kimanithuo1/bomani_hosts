# BomaniHosts

A modern, responsive accommodation listing website for Kenya built with React, Vite, and Tailwind CSS v4.

## Features

- 🏠 **Property Listings** - Browse premium accommodations across Kenya
- 🔍 **Advanced Search** - Filter by location, price range, and property type
- 📱 **Mobile-First Design** - Fully responsive on all devices
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🔗 **Direct Booking** - WhatsApp integration for seamless contact
- 📊 **SEO Optimized** - JSON-LD structured data, meta tags, Open Graph tags
- ⚡ **High Performance** - Optimized images, lazy loading, fast load times

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Extract the project files
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The site will open at `http://localhost:5173`

## Building for Production

\`\`\`bash
npm run build
\`\`\`

The optimized build will be in the `dist` folder.

## Project Structure

\`\`\`
src/
├── components/          # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   └── ListingCard.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Listings.jsx
│   ├── ListingDetail.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Privacy.jsx
├── data/               # Static data
│   └── listings.js
├── index.css         # Global styles and theme
├── App.jsx             # Main app component
└── main.jsx            # Entry point
\`\`\`

## SEO Features

- Meta tags for all pages
- JSON-LD structured data for listings (LodgingBusiness schema)
- Open Graph and Twitter Card tags
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast performance (LCP optimization)

## Sample Data

10 curated property listings across Kenya:
- Nairobi (Westlands, Karen, Kileleshwa, CBD, Riverside)
- Mombasa (Diani)
- Kisumu
- Nakuru
- Eldoret

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to vercel.com and import the repository
3. Vercel will automatically detect Vite and deploy

### Environment Variables

No environment variables required for the basic version.

## Customization

### Colors

Edit the color tokens in `src/index.css`:
\`\`\`css
@theme inline {
  --color-primary: #526d96;
  --color-accent: #eec3b4;
  --color-accent-secondary: #ef9587;
  --color-background: #fefbf3;
}
\`\`\`

### Adding More Listings

Add properties to `src/data/listings.js`:
\`\`\`javascript
{
  id: 11,
  title: "Your Property Title",
  location: "City, Area",
  price: 10000,
  rating: 4.8,
  featured: true,
  image: "/path/to/image.jpg",
  images: [/* array of images */],
  description: "Property description",
  amenities: ["WiFi", "Kitchen", "Parking"],
  address: "Full address",
  host: "Host name",
  whatsapp: "+254xxxxxxxxx",
}
\`\`\`

## Performance Optimization

- Images optimized with lazy loading
- CSS minified with Tailwind v4
- JavaScript code-split by route
- Semantic HTML for better SEO
- Lighthouse best practices followed

## License

MIT License - feel free to use this as a template for your own projects.

## Support

For questions or issues, contact: info@bomanihosts.com
