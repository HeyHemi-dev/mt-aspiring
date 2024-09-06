import { useRef } from 'react'
import { Tile } from 'model/tiles'
import TileListItem from './TileListItem'
import useGridLayout from '@/hooks/useGridLayout'

function TileList({ tiles }: { tiles: Tile[] }) {
  const gridElement = useRef<HTMLDivElement>(null)
  const gridCellMinPx: number = 96
  const gridGapPx: number = 24
  useGridLayout(gridElement, gridCellMinPx, gridGapPx)

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
