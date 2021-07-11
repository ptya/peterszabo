// based on https://usehooks.com/useOnClickOutside/
import React, { useEffect } from 'react'

function useOnClickOutside(ref: React.RefObject<HTMLDivElement>, handler: () => void): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    // add listeners
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    // cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler, ref])
}

export { useOnClickOutside }
