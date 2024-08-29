import Brand from './Brand'
import ModeToggle from './ModeToggle'
import Nav from './Nav'

function Header() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] place-items-center gap-4">
        <Brand />
        <Nav />
        <ModeToggle />
      </div>
    </>
  )
}

export default Header
