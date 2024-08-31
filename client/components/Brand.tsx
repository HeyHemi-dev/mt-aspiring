import { Link } from 'react-router-dom'

function Brand() {
  return (
    <>
      <Link
        to="/"
        className="flex h-16 max-h-16 items-center justify-start gap-2 overflow-hidden rounded-md p-2"
      >
        <img
          src="/brand/WeddingReadyLogo.png"
          alt="WeddingReady Logo"
          className="h-full object-contain"
        />
        <div className="font-bold">Mt Aspiring</div>
      </Link>
    </>
  )
}

export default Brand
