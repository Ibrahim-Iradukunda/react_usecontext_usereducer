import Navbar from './components/Navbar'
import TaskManager from './components/TaskManager'
import { ThemeProvider } from './context/ThemeProvider'
import { useTheme } from './context/useTheme'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const { theme } = useTheme()

  return (
    <div className={`app-shell ${theme}`}>
      <Navbar />
      <main className="main-content">
        <section className="intro" aria-labelledby="page-title">
          <p className="eyebrow">React state lab</p>
          <h1 id="page-title">Make state feel intentional.</h1>
          <p className="intro-copy">
            A small workspace for exploring global themes with{' '}
            <strong>useContext</strong> and predictable task updates with{' '}
            <strong>useReducer</strong>.
          </p>
        </section>
        <TaskManager />
      </main>
      <footer>Built with React, TypeScript</footer>
    </div>
  )
}

export default App
