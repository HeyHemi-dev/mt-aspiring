import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import * as api from '../../api/apiClient'
import TileExpanded from '../TileExpanded'

function TileDetail() {
  const { tileId } = useParams()

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['tile', tileId],
    queryFn: () => api.getTileById(tileId),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Tile</p>)
  isSuccess && (outlet = <TileExpanded tile={data} />)

  console.log(data)

  return (
    <>
      <div></div>
      {outlet}
    </>
  )
}

export default TileDetail
