import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page grid min-h-[100svh] grid-rows-[auto_1fr_auto] p-2">
        <header className="header row-start-1 row-end-2 rounded-t-3xl bg-background text-foreground">
          <Header />
        </header>
        <main className="content row-start-2 row-end-3 rounded-b-3xl bg-background text-foreground">
          <Outlet />
        </main>
        <footer className="footer row-start-3 row-end-4">
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
