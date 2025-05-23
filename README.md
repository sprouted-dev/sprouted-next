# Sprouted Website

The official website for Sprouted - showcasing the Weather System for developers.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Vercel (deployment)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The main page component is in `app/(landing)/page.tsx` and includes:
- Hero section with word carousel
- Current development weather demo
- Feature showcase
- Installation instructions
- Early access signup

## API Routes

The site includes several API routes using Next.js App Router:

- `/api/early-access` - Handles early access form submissions
- `/api/weather` - Redirects for Weather System Go module
- `/api/sprout-cli` - Redirects for Sprout CLI Go module

## Deployment

The site is automatically deployed to Vercel on push to the main branch.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features

- **Dark Mode**: Automatic theme detection with manual toggle
- **Word Carousel**: Rotating phrases showcasing key features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Go Module Support**: Special routing for Go module imports
- **Early Access**: Form for collecting interested users

## Contributing

See [CONTRIBUTING.md](../garden/CONTRIBUTING.md) for details.