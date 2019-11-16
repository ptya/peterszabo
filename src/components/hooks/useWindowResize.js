import React, { useRef, useLayoutEffect, useState } from 'react'

function useWindowResize() {
  const [bounds, set] = useState({ width: window.innerWidth, height: window.innerHeight });

  useLayoutEffect(() => {
    const handleResize = () => set({width: window.innerWidth, height: window.innerHeight})

    window.addEventListener('resize', handleResize)

    return () => (
      window.removeEventListener('resize', handleResize)
    )
  })

  return bounds;
}

export { useWindowResize }