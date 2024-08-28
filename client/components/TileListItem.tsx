import { Tile } from 'model/tiles'

function TileListItem({ tile }: { tile: Tile }) {
  return (
    <>
      <div>Tile</div>
      <h2>{tile.title}</h2>
    </>
  )
}

export default TileListItem
