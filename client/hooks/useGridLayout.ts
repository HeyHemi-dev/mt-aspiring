import { useEffect } from 'react'
import { debounce } from '@/lib/debounce'

function useGridLayout(
  gridRef: React.RefObject<HTMLDivElement>,
  gridCellMin: number,
  gridGap?: number,
) {
  useEffect(() => {
    const grid = gridRef.current

    // Creates square cells
    function setCellSize() {
      if (!grid) return
      const gridGapPx = gridGap ?? 0
      const gridWidthPx = grid.getBoundingClientRect().width
      const colCount = Math.floor(
        (gridWidthPx + gridGapPx) / (gridCellMin + gridGapPx),
      )
      const gridGapTotal = (colCount - 1) * gridGapPx
      const cellWidth = (gridWidthPx - gridGapTotal) / colCount
      const cellHeight = cellWidth

      console.log(gridGapPx, gridWidthPx, colCount, cellWidth, cellHeight)

      // Apply grid styles directly to the element
      grid.style.overflow = 'hidden'
      grid.style.display = 'grid'
      grid.style.gridAutoFlow = 'dense'
      grid.style.gridTemplateColumns = `repeat(${colCount}, ${cellWidth}px)`
      grid.style.gridAutoRows = `${cellHeight}px`
      grid.style.gap = `${gridGap}px`
    }

    // Set initial cell size
    setCellSize()

    // Update cell size on browser resize
    const debouncedSetCellSize = debounce(setCellSize, 200)
    window.addEventListener('resize', debouncedSetCellSize)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', debouncedSetCellSize)
    }
  }, [gridRef, gridCellMin, gridGap])
}

export default useGridLayout
