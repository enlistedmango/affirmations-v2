import './App.css'
import AffirmationCard from './components/AffirmationCard'
import { useAffirmation } from './hooks/useAffirmation'
import { THEMES } from './theme/palette'
import { useMemo, useState } from 'react'

function App() {
  const { data, loading, reload, copy, share } = useAffirmation()
  const [themeIndex, setThemeIndex] = useState(() => Math.floor(Math.random() * THEMES.length))
  const theme = THEMES[themeIndex]

  const styleVars = useMemo(() => ({
    // CSS variables for the card theme
    ['--card-accent' as any]: theme.accent,
    ['--card-shadow' as any]: theme.shadow,
    ['--card-bg1' as any]: theme.bg1,
    ['--card-bg2' as any]: theme.bg2,
  }), [theme])

  const onNew = () => {
    setThemeIndex((i) => (i + 1) % THEMES.length)
    reload()
  }

  return (
    <div className="app-shell">
      <main className="container">
        <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
          <p className="intro">One gentle affirmation at a time. Refresh for a new card and take a breath.</p>
          {data ? (
            <AffirmationCard affirmation={data} entering style={styleVars} />
          ) : (
            <div className="status" role="status" aria-live="polite">
              {loading ? <span className="spinner" aria-hidden /> : null}
              <span>{loading ? 'Finding you a good one…' : 'Welcome'}</span>
            </div>
          )}

          {/* We keep the UI calm; errors are logged to console only */}

          <div className="controls">
            <button className="btn primary" onClick={onNew} disabled={loading}>
              {loading ? 'Refreshing…' : 'New affirmation'}
            </button>
            <button className="btn ghost" onClick={() => copy()} disabled={!data}>Copy</button>
            <button className="btn ghost" onClick={() => share()} disabled={!data}>Share</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <span>Pastel calm. Built by Mango with ❤️</span>
      </footer>
    </div>
  )
}

export default App
