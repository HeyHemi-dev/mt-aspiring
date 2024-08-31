import Brand from './Brand'
import ModeToggle from './ModeToggle'
import Nav from './Nav'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className="site-padding grid grid-cols-[auto_1fr_auto_auto] place-items-center gap-4">
      <Brand />
      <SearchBar />
      <div className="justify-self-end">
        <Nav />
      </div>
      <ModeToggle />
    </div>
  )
}

export default Header
