import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider'
import ModeToggle from './ModeToggle'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
        <header>
          <div className="flex">
            <div>Nav</div>
            <ModeToggle />
          </div>
        </header>
        <main className="row-start-2 row-end-3">
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </ThemeProvider>
  )
}

export default App
