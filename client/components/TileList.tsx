import { useRef } from 'react'
import { Tile } from 'model/tiles'
import TileListItem from './TileListItem'
import useGridLayout from '@/hooks/useGridLayout'

function TileList({ tiles }: { tiles: Tile[] }) {
  const gridElement = useRef<HTMLDivElement>(null)
  const gridCellMin: number = 224
  const gridGap: number = 24
  useGridLayout(gridElement, gridCellMin, gridGap)

  return (
    <>
      <div id="tile-list" ref={gridElement}>
        {tiles.map((tile, index) => (
          <TileListItem key={index} tile={tile} />
        ))}
      </div>
    </>
  )
}

export default TileList
