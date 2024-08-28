import { Tile } from 'model/tiles'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from './ui/button'

function TileExpanded({ tile }: { tile: Tile }) {
  return (
    <Card>
      <div className="tile-expanded-layout grid grid-cols-2">
        <div className="tile-expanded-image">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt={tile.title}
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="tile-expanded-content grid grid-rows-[auto_1fr_auto]">
          <CardHeader>
            <CardTitle>{tile.title}</CardTitle>
            <CardDescription>{tile.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3>Featured Vendors</h3>
          </CardContent>
          <CardFooter className="flex flex-row-reverse">
            <Button>Save</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

export default TileExpanded
