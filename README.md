# @sirsluginston/shared-ui

Shared UI component library for SirSluginston Co projects. Built with React, TypeScript, and Vite.

## Installation

```bash
npm install @sirsluginston/shared-ui
```

## Quick Start

```tsx
import { Shell, Card, Button } from '@sirsluginston/shared-ui';
import '@sirsluginston/shared-ui/dist/shared-ui.css';

function App() {
  return (
    <Shell
      projectTitle="My Project"
      navItems={[
        { label: 'Home', onClick: () => {} },
        { label: 'About', onClick: () => {} }
      ]}
    >
      <Card title="Welcome">
        <Button onClick={() => alert('Hello!')}>Click Me</Button>
      </Card>
    </Shell>
  );
}
```

## What's Included

Most of the basic stuff you'd need for a site - buttons, cards, modals, forms, navigation, etc. Everything uses CSS variables so you can theme it easily across different projects.

Main components:
- **Shell** - Wraps header, navbar, and footer all together
- **Card** - Basic card container
- **Button**, **Input**, **Toggle** - For forms
- **Modal**, **Alert**, **Badge** - Feedback components
- **GridLayout**, **Sidebar** - Layout helpers
- **Icons** - SVG icons (Sun, Moon, Bell, Settings, User)
- Plus a bunch more - check the exports in `src/index.ts`

## Theming

Everything uses CSS variables. Import the CSS file and you get all the theme variables:

```tsx
import '@sirsluginston/shared-ui/dist/shared-ui.css';
```

The main colors you can override:
- `--brand-color` - Main brand color
- `--project-color` - Project-specific color (overrides brand for individual projects)
- `--accent-color` - Accent/highlight color
- `--light-color` - Background color
- `--dark-color` - Text color
- `--shared-border-color` - Border color (switches with theme)

For dark mode, just add the `dark-mode` class to your body:

```tsx
document.body.classList.toggle('dark-mode');
```

The colors will automatically switch. Borders use `--shared-border-color` which switches from project-color in light mode to accent-color in dark mode.

## Examples

### Shell Component

The Shell component handles the whole page layout - header with logo, navbar, footer, theme toggle, etc:

```tsx
import { Shell, SunIcon, MoonIcon } from '@sirsluginston/shared-ui';

<Shell
  projectTitle="SirSluginston Co"
  projectLogo={<img src="/logo.jpg" alt="Logo" />}
  navItems={[
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'Projects', onClick: () => navigate('/projects') }
  ]}
  themeToggle={
    <button onClick={toggleTheme}>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  }
  footerYearCreated={2020}
  footerPoweredBy="SirSluginston Co"
>
  {/* Your page content */}
</Shell>
```

### Card with Grid

```tsx
import { GridLayout, Card } from '@sirsluginston/shared-ui';

<GridLayout>
  {projects.map(project => (
    <Card key={project.id} title={project.name}>
      <p>{project.description}</p>
    </Card>
  ))}
</GridLayout>
```

## Development

```bash
npm install
npm run dev
npm run build
```

**The build process generates TypeScript declarations automatically. Publishing runs the build first via `prepublishOnly`.**

## License

MIT
