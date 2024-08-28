import { Tile } from 'model/tiles'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Link } from 'react-router-dom'

function TileListItem({ tile }: { tile: Tile }) {
  return (
    <Card>
      <div className="tile-item-layout grid grid-rows-[auto_1fr]">
        <Link to={`tiles/${tile.id}`}>
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt={tile.title}
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </Link>
        <CardHeader>
          <CardTitle>{tile.title}</CardTitle>
          <CardDescription>{tile.description}</CardDescription>
        </CardHeader>
      </div>
    </Card>
  )
}

export default TileListItem
