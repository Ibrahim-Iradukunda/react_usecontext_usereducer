# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # React Guided Learning Activity: Theme Switcher & useReducer

  This Vite + React + TypeScript activity demonstrates two React state-management
  patterns:

  - `useContext` shares the active light or dark theme across the application.
  - `useReducer` adds and removes typed tasks in the task manager.

  ## Run Locally

  ```bash
  npm install
  npm run dev
````

The development server is available at `http://localhost:5173/` by default.

Use these commands before submitting:

```bash
npm run lint
npm run build
```

## Project Structure

- `src/constants/theme.ts` contains the typed theme constants.
- `src/context/` contains the context value, provider, and `useTheme` hook.
- `src/reducers/taskReducer.ts` contains the typed task state and actions.
- `src/components/Navbar.tsx` uses the theme hook to switch themes.
- `src/components/TaskManager.tsx` uses `useReducer` to manage tasks.
