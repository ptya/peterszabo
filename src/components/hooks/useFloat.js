import { useLayoutEffect } from 'react'

function useFloat(id, handler) {
  useLayoutEffect(() => {
    const floatField = document.getElementById(id)

    const listener = () => {
      handler()
    }

    if (floatField) {
      floatField.addEventListener('focus', listener)
    }

    return () => {
      floatField.removeEventListener('focus', listener)
    }
  }, [handler, id]) // Empty array ensures effect is only run on mount and unmount
}

export { useFloat }
