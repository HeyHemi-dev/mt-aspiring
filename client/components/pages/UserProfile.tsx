import { useQuery } from '@tanstack/react-query'
import TileList from '../TileList'
import * as api from '../../api/apiClient'
import useCurrentUser from '@/hooks/use-current-user'

function UserProfile() {
  // Update the query to use a custom hook instead.
  // Custom hook needs to only show saved tiles only (query param?)
  // const { data, isPending, isError, isSuccess } = useTilesList()

  const userQuery = useCurrentUser()

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['tiles', userQuery.data?.id],
    queryFn: () => api.getSavedTiles(userQuery.data),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!userQuery.data,
  })

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Tiles</p>)
  isSuccess && (outlet = <TileList tiles={data} />)

  // console.log(data)

  return (
    <>
      <section className="site-padding section-padding">{outlet}</section>
    </>
  )
}

export default UserProfile
