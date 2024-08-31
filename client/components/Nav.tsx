import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="flex gap-4">
      <Link to="/">Add Tile</Link>
      <Link to="/">Profile</Link>
      <Link to="/">Settings</Link>
    </div>
  )
}

export default Nav
