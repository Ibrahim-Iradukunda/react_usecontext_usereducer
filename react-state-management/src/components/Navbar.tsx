import { DARK_THEME, LIGHT_THEME } from '../constants/theme'
import { useTheme } from '../context/useTheme'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME

  return (
    <header className="navbar">
      <div className="brand-mark" aria-hidden="true">S</div>
      <div>
        <p className="brand-name">Stateful</p>
        <p className="brand-subtitle">React guided activity</p>
      </div>
      <button className="theme-toggle" type="button" onClick={toggleTheme}>
        <span aria-hidden="true">{theme === LIGHT_THEME ? '☾' : '☀'}</span>
        Switch to {nextTheme} mode
      </button>
    </header>
  )
}

export default Navbar