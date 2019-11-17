import React, { useRef, useLayoutEffect, useState } from 'react'

function useWindowResize() {
  const [bounds, set] = useState({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight,
  })

  useLayoutEffect(() => {
    const handleResize = () =>
      set({
        width: document.body.offsetWidth,
        height: document.body.offsetHeight,
      })

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return bounds
}

export { useWindowResize }
