import { useState, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

function useSsrMediaQuery(query) {
  const [isClient, setClient] = useState(false)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true)
    }
  }, [])

  const isQuery = useMediaQuery(query)

  return isClient && isQuery
}

export { useSsrMediaQuery }
