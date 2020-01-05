import { useLayoutEffect, useState, useContext } from 'react'

import ScreenContext from 'components/context/ScreenContext'

import { constants } from 'utils'

function useActive(setActive, setHovered) {
  const [[left, width], setDimensions] = useState([0, 0])
  const { isClient, isSmallScreen } = useContext(ScreenContext)

  useLayoutEffect(() => {
    const active = document.getElementsByClassName('active')[0]
    if (isSmallScreen || !isClient) return

    const handleActive = () => {
      const newLeft = active.offsetLeft - constants.leftOffset
      const newWidth = active.offsetWidth + constants.widthOffset
      setDimensions([newLeft, newWidth])
      setActive([newLeft, newWidth])
      setHovered([newLeft, newWidth])
    }

    const handleSizeChange = e => {
      const changedLeft = e[0].target.offsetLeft - constants.leftOffset
      const changedWidth = e[0].target.offsetWidth + constants.widthOffset
      if (left !== changedLeft || width !== changedWidth) {
        handleActive(e[0].target)
      }
    }

    handleActive(active)

    const ro = new ResizeObserver(handleSizeChange)
    ro.observe(active)

    window.addEventListener('resize', handleActive)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', handleActive)
    }
  }, [left, setActive, setHovered, width, isSmallScreen, isClient]) // Empty array ensures effect is only run on mount and unmount
}

export { useActive }
