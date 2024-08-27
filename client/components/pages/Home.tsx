import { useQuery } from '@tanstack/react-query'
import TileList from '../TileList'
import useShowTiles from '@/hooks/use-Show-Tiles'

const Home = () => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['tiles'],
    queryFn: () => useShowTiles(''),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  let feedOutlet = <></>
  isPending && (feedOutlet = <p>Loading...</p>)
  isError && (feedOutlet = <p>Error Loading Tiles</p>)
  isSuccess && (feedOutlet = <TileList />)

  console.log(data)

  return (
    <>
      <div>Home Feed</div>
      {feedOutlet}
    </>
  )
}

export default Home
