import { useLayoutEffect, useState, useContext, SetStateAction } from 'react'

import ScreenContext from 'components/context/ScreenContext'

import { constants } from 'utils'

function useActive(setActive: React.Dispatch<SetStateAction<number[]>>, setHovered: React.Dispatch<SetStateAction<number[]>>) {
  const [[left, width], setDimensions] = useState([0, 0])
  const { isClient, isSmallScreen } = useContext(ScreenContext)

  useLayoutEffect(() => {
    const active = document.getElementsByClassName('active')[0]
    if (isSmallScreen || !isClient) return

    const handleActive = (el: HTMLElement) => {
      const newLeft = el.offsetLeft - constants.leftOffset
      const newWidth = el.offsetWidth + constants.widthOffset
      setDimensions([newLeft, newWidth])
      setActive([newLeft, newWidth])
      setHovered([newLeft, newWidth])
    }

    const handleSizeChange = (entries: ReadonlyArray<ResizeObserverEntry>) => {
      const target = entries[0].target as HTMLElement
      const changedLeft = target.offsetLeft - constants.leftOffset
      const changedWidth = target.offsetWidth + constants.widthOffset
      if (left !== changedLeft || width !== changedWidth) {
        handleActive(target)
      }
    }

    const handleResize = () => {
      const newActive = document.getElementsByClassName('active')[0]
      handleActive(newActive as HTMLElement)
    }

    handleActive(active as HTMLElement)

    const ro = new ResizeObserver(handleSizeChange)
    ro.observe(active)

    window.addEventListener('resize', handleResize)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [left, setActive, setHovered, width, isSmallScreen, isClient]) // Empty array ensures effect is only run on mount and unmount
}

export { useActive }
