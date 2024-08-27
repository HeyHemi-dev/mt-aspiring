import { Tile } from 'model/tiles'

function TileExpanded({ tile }: { tile: Tile }) {
  return (
    <div>
      <h2>{tile.title}</h2>
      <img src={tile.imagePath} alt={tile.title} />
      <p>{tile.description}</p>
      <p>Created by: {tile.createdBy}</p>
      <p>Created at: {tile.createdAt?.toString()}</p>
    </div>
  )
}

export default TileExpanded
