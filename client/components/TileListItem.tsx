import { Tile } from 'model/tiles'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

function TileListItem({ tile }: { tile: Tile }) {
  const tileLink = `tiles/${tile.id}`
  return (
    <Card className="tile-list-item grid grid-rows-[minmax(0,1fr)_auto]">
      <Link to={tileLink} className="flex">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt={tile.title}
          className="h-full w-full rounded-lg object-cover"
        />
      </Link>
      <CardContent className="p-2">
        <Link to={tileLink}>
          <CardTitle>{tile.title}</CardTitle>
        </Link>
      </CardContent>
    </Card>
  )
}

export default TileListItem
