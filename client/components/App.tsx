import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
        <header>Nav</header>
        <main className="row-start-2 row-end-3 flex flex-col items-center gap-4 self-center">
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </>
  )
}

export default App
