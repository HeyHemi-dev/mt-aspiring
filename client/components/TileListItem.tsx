import { Tile } from 'model/tiles'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

function TileListItem({ tile }: { tile: Tile }) {
  const tileLink = `tiles/${tile.id}`
  return (
    <Card className="tile-list-item grid grid-rows-subgrid overflow-hidden">
      <Link to={tileLink} className="col-span-full row-span-full flex">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt={tile.title}
          className="h-full w-full rounded-md object-cover"
        />
      </Link>
      <CardContent className="pointer-events-none col-span-full row-span-full flex items-end p-2">
        <CardTitle>{tile.title}</CardTitle>
      </CardContent>
    </Card>
  )
}

export default TileListItem
