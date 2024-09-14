import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider'
import { Toaster } from './ui/toaster'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page bg-muted p-2 text-foreground">
        <header className="header">
          <Header />
        </header>
        <main className="content rounded-md bg-background text-foreground drop-shadow-md">
          <Outlet />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default App
