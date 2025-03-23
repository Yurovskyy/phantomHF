# Phantom Hardwood Floors - Website

This is a modern, responsive website for Phantom Hardwood Floors, a premium hardwood flooring company. The site showcases their services, work, and expertise in hardwood floor installation, restoration, and maintenance.

## Technical Stack

- **React 19+** - For building the user interface
- **TypeScript** - For type safety and better developer experience
- **Vite** - Fast build tool and development server
- **React Bootstrap 5+** - For responsive UI components
- **Bootstrap Icons** - For iconography

## Features

- **Responsive Design** - Mobile-first approach for all screen sizes
- **SEO Optimized** - Meta tags and proper semantic HTML structure
- **Modular Component Architecture** - Clean and maintainable code structure
- **Interactive Elements** - Engaging user interface with micro-interactions
- **Multi-step Forms** - Progressive data collection for quote requests

## Project Structure

```
phantom-hardwood-floors/
├── public/             # Static assets
│   ├── images/         # Image resources
│   ├── favicon.svg     # Site favicon
│   └── logo.svg        # Company logo
├── src/                # Source code
│   ├── components/     # React components
│   ├── assets/         # Other assets (icons, styles)
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 18+)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/phantom-hardwood-floors.git
   cd phantom-hardwood-floors
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

## Deployment

The site is configured to be deployed on GitHub Pages. The workflow is set up on the `gh-pages` branch.

To deploy:

```
npm run build
```

Push to the gh-pages branch or set up CI/CD for automatic deployment.

## Customization

- **Colors**: Main color variables are defined in `src/index.css`
- **Images**: Replace placeholder images in `public/images/` with actual project photos
- **Content**: Update text content in respective components

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from premium service websites
- Bootstrap Icons for the icon set
- Google Fonts for typography
