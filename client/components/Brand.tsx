import { Link } from 'react-router-dom'

function Brand() {
  return (
    <>
      <Link
        to="/"
        className="flex h-16 max-h-16 max-w-28 justify-start overflow-hidden rounded-md p-2"
      >
        <img
          src="/brand/WeddingReadyLogo.png"
          alt="WeddingReady Logo"
          className="h-full object-contain"
        />
      </Link>
    </>
  )
}

export default Brand
