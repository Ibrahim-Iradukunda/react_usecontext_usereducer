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

# React Guided Learning Activity: Theme Switcher and Task Manager

This Vite, React, and TypeScript project demonstrates two state-management patterns:

- `useContext` shares a light or dark theme across the application.
- `useReducer` manages the task list, including adding and removing tasks.

## Run Locally

```bash
ls & cd react-state-management
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173/` by default. Run the checks before submitting:

```bash
npm run lint
npm run build
```

## Assignment Requirements

- Theme switching uses the provided palette: light (`#FFFFFF`, `#000000`, `#1E90FF`) and dark (`#242629`, `#FFFFFF`, `#85D1B0`).
- The theme context is typed, exposed through a provider, and consumed through the `useTheme` hook.
- Tasks can be added and individually removed with a typed reducer.
- Blank or whitespace-only tasks cannot be submitted.

## Project Structure

- `src/constants/theme.ts` defines the theme values and type.
- `src/context/` contains the context, provider, and custom hook.
- `src/reducers/taskReducer.ts` defines task state and reducer actions.
- `src/components/` contains the theme toggle and task manager.

## GitHub Submission

Commit and push meaningful increments with clear messages. Keep `node_modules` out of version control, ensure the required source files and lockfile are included, and submit the repository URL as directed by your course.
