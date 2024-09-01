import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page bg-primary text-foreground">
        <header className="header rounded-t-3xl border-b bg-muted text-foreground">
          <Header />
        </header>
        <main className="content rounded-b-3xl bg-background text-foreground">
          <Outlet />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
