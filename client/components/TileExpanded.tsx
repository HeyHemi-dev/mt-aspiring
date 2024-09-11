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
import SaveButton from './SaveButton'
import useCurrentUser from '@/hooks/useCurrentUser'

function TileExpanded({ tile }: { tile: Tile }) {
  const tileSuppliers = [
    {
      supplier: 'Patina Photo',
      role: 'Photographer',
    },
    {
      supplier: 'Rose & Smith',
      role: 'Venue',
    },
    {
      supplier: 'Yvette Edwards',
      role: 'Florist',
    },
    {
      supplier: 'George & Co',
      role: 'Tables',
    },
    {
      supplier: 'George & Co',
      role: 'Napkins',
    },
    {
      supplier: 'George & Co',
      role: 'Dinnerware',
    },
  ]

  const { data } = useCurrentUser()
  const user = data ? data : { id: null }

  return (
    <Card className="w-full max-w-[60rem]">
      <div className="tile-expanded-layout grid grid-cols-2">
        <div className="tile-expanded-image bg-muted">
          <AspectRatio ratio={1 / 1}>
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
            <div className="grid-table grid-cols-[auto_1fr] overflow-hidden rounded-md text-sm">
              <div className="grid-table-header bg-muted">
                <p>Supplier Name</p>
                <p>Product/Service</p>
              </div>
              {tileSuppliers.map((item, index) => (
                <div key={index} className="grid-table-row">
                  <p>{item.supplier}</p>
                  <p className="text-muted-foreground">{item.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-row-reverse">
            <SaveButton
              saveData={{
                tileId: tile.id,
                isSaved: tile.isSaved ? tile.isSaved : null,
                updatedAt: 0,
                savedBy: user.id,
              }}
            />
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

export default TileExpanded
