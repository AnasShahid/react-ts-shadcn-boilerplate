# React + TypeScript + Shadcn UI Boilerplate

A modern, feature-rich boilerplate for building React applications with TypeScript and Shadcn UI components.

## Features

- ⚡️ **React 18** with TypeScript
- 🎨 **Shadcn UI** - Beautiful, accessible components built with Radix UI and Tailwind CSS
- 🌐 **i18n Support** - Internationalization with react-i18next (English and Spanish included)
- 🎯 **React Router** - Client-side routing with React Router v6
- 🌙 **Dark Mode** - Theme switching with system preference support
- 📱 **Responsive Design** - Mobile-first approach with responsive components
- 🔧 **Modern Tooling** - Vite for fast development and building
- 🎭 **Component Organization** - Modular architecture with feature-based organization
- 🔐 **Authentication** - Complete auth flow with protected routes

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components from shadcn
│   └── layout/        # Layout components (Header, Navigation, Settings)
├── config/            # Configuration files
├── hooks/             # Custom React hooks
├── layouts/           # Page layouts
├── lib/              # Utility functions and libraries
├── locales/          # i18n translation files
├── modules/          # Feature modules
│   ├── auth/         # Authentication module
│   └── pricing/      # Pricing module example
├── providers/        # React context providers
├── routes/           # Route definitions
└── styles/           # Global styles and Tailwind config
```

## Modules

### Core
- **Theme Provider** - Manages application theming with dark/light mode support
- **i18n Provider** - Handles internationalization with language switching
- **Layout Components** - Header, Navigation Menu, and Settings Menu

### Features
- **Settings Menu** - Centralized settings management with:
  - Theme Toggle (Dark/Light mode)
  - Language Switcher (English/Spanish)
- **Authentication Module** - Complete auth flow with:
  - Login/Register forms with validation
  - Protected routes
  - Auth state management
  - Password reset flow
  - Remember me functionality
- **Pricing Module** - Example module with:
  - Pricing cards
  - Localized content
  - Responsive layout

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
