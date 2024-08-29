import { useQuery } from '@tanstack/react-query'
import TileList from '../TileList'
import * as api from '../../api/apiClient'

function Home() {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['tiles'],
    queryFn: () => api.getTiles(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Tiles</p>)
  isSuccess && (outlet = <TileList tiles={data} />)

  console.log(data)

  return (
    <>
      <section className="site-padding section-padding">{outlet}</section>
    </>
  )
}

export default Home
