import { useLayoutEffect } from 'react'

import { constants } from 'utils'

function useActive(setActive, setHovered) {
  useLayoutEffect(() => {
    const active = document.getElementsByClassName('active')[0]
    const left = active.offsetLeft - constants.leftOffset
    const width = active.offsetWidth + constants.widthOffset
    setActive([left, width])
    setHovered([left, width])
    return () => {}
  }, [setActive, setHovered]) // Empty array ensures effect is only run on mount and unmount
}

export { useActive }
