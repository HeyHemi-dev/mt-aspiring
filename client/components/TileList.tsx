import { Tile } from 'model/tiles'
import TileListItem from './TileListItem'

function TileList({ tiles }: { tiles: Tile[] }) {
  return (
    <>
      <div className="grid">
        {tiles.map((tile, index) => (
          <TileListItem key={index} tile={tile} />
        ))}
      </div>
    </>
  )
}

export default TileList
