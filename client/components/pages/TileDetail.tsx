import { useQuery } from '@tanstack/react-query'
import useShowTileById from '@/hooks/useShowTileById'
import { useParams } from 'react-router-dom'

const TileDetail = () => {
  const { tileId } = useParams()

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['tile', tileId],
    queryFn: () => useShowTileById(tileId),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Tile</p>)
  isSuccess && (outlet = <p>Tile Detail</p>)

  console.log(data)

  return (
    <>
      <div></div>
      {outlet}
    </>
  )
}

export default TileDetail
