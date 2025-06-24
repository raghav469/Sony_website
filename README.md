# Sony_website

A minimal React + TypeScript + Vite setup with built-in HMR (Hot Module Replacement) and ESLint integration.

## 🔧 Features

- ⚛️ React 18
- ✨ TypeScript
- ⚡ Vite for fast development
- 🔁 HMR (Hot Module Replacement)
- 🧹 ESLint setup with extendable rules

## 📦 Plugins Used

Vite supports two official React plugins:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) — uses **Babel** for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) — uses **SWC** for Fast Refresh

You can choose either depending on your project requirements.

## ✅ Recommended ESLint Setup

If you're working on a **production-grade** TypeScript application, it's advised to enable type-aware linting.

Update your ESLint config like so:

```ts
export default tseslint.config({
  extends: [
    // Recommended for projects using type-checking
    ...tseslint.configs.recommendedTypeChecked,

    // Optionally, for stricter rule enforcement
    // ...tseslint.configs.strictTypeChecked,

    // Optionally, for stylistic preferences
    // ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
🚀 Getting Started

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
