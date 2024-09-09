import { useQuery } from '@tanstack/react-query'
import TileList from '../TileList'
import * as api from '../../api/apiClient'
import useCurrentUser from '@/hooks/useCurrentUser'

function UserProfile() {
  const userQuery = useCurrentUser()

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['tiles', userQuery.data?.id],
    queryFn: () => api.getSavedTiles(userQuery.data?.id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!userQuery.data?.id,
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
