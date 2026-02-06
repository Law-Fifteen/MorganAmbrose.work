# Morgan Naranjo Portfolio

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and TanStack Table. Features professional sales leadership projects, tech side projects, comprehensive skills showcase, and full dark mode support.

## Features

- **Professional Projects**: 10 detailed projects from career at Charter Communications, GasHawk, Allstate, and Premier Auto
- **Tech Projects**: Personal development projects including "Going Deep with Morgan" card game
- **Interactive Tables**: Sortable, filterable project tables powered by TanStack Table
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Gradient accents, smooth animations, and professional aesthetic
- **Dark Mode**: Full dark mode support with theme toggle (Light/Dark/System)
- **Resume Upload**: Client-side resume preview functionality
- **Performance Optimized**: Next.js 15 App Router for optimal loading

## Tech Stack

- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4.17
- **Tables**: TanStack React Table 8.21
- **Icons**: Lucide React 0.475
- **Themes**: next-themes 0.4.4
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
```bash
cd /portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist` folder.

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── ProfessionalProjectsTable.tsx  # TanStack table for professional work
│   │   ├── TechProjectsTable.tsx          # TanStack table for tech projects
│   │   ├── ResumeSection.tsx              # Resume upload/download
│   │   ├── SkillsSection.tsx              # Skills grid display
│   │   ├── ThemeProvider.tsx              # Next-themes provider
│   │   └── ThemeToggle.tsx                # Light/Dark/System toggle
│   ├── data.ts                            # Project and skills data
│   ├── types.ts                           # TypeScript interfaces
│   ├── globals.css                        # Tailwind directives + CSS variables
│   ├── layout.tsx                         # Root layout with ThemeProvider
│   └── page.tsx                           # Main portfolio page
├── public/                                # Static assets
├── tailwind.config.js                     # Tailwind configuration with dark mode
├── next.config.js                         # Next.js configuration (static export)
├── tsconfig.json                          # TypeScript configuration
└── package.json                           # Dependencies
```

## Customization

### Adding Projects

Edit `app/data.ts` to add new professional or tech projects:

```typescript
export const professionalProjects: Project[] = [
  {
    id: '11',
    title: 'New Project Title',
    year: '2024 - Present',
    company: 'Company Name',
    description: 'Project description...',
    tags: ['Skill 1', 'Skill 2', 'Skill 3'],
    impact: 'Measurable impact or result'
  }
];
```

### Updating Skills

Edit the `skills` array in `app/data.ts`:

```typescript
export const skills = [
  'New Skill',
  'Existing Skill',
  // ...
];
```

### Changing Colors

Modify the `colors` section in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-color-dark',
    // ...
  }
}
```

### Dark Mode Theme Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Static Export

The project is configured for static export:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}
```

Run `npm run build` and deploy the `dist` folder.

## Dark Mode

The portfolio includes a theme toggle in the navigation bar with three options:
- **Light Mode**: Bright, clean interface
- **Dark Mode**: Easy on the eyes for nighttime viewing
- **System**: Automatically matches your device's preference

The theme preference is persisted in localStorage and applied immediately across all components.

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Tables powered by [TanStack Table](https://tanstack.com/table/latest)
- Dark mode by [next-themes](https://github.com/pacocoursey/next-themes)