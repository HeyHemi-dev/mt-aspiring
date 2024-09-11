// import { useQuery } from '@tanstack/react-query'
// import * as api from '../../api/apiClient'
import useTilesList from '@/hooks/useTilesList'
import TileList from '../TileList'

function Home() {
  const { data, isPending, isError, isSuccess } = useTilesList()

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Tiles</p>)
  isSuccess && (outlet = <TileList tiles={data} />)

  //console.log(data)

  return (
    <>
      <section className="site-padding section-padding">{outlet}</section>
    </>
  )
}

export default Home
