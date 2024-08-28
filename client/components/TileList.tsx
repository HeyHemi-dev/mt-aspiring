import { Tile } from 'model/tiles'
import TileListItem from './TileListItem'

function TileList({ tiles }: { tiles: Tile[] }) {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
        {tiles.map((tile, index) => (
          <TileListItem key={index} tile={tile} />
        ))}
      </div>
    </>
  )
}

export default TileList
