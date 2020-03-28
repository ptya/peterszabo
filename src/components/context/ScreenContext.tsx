import React, { createContext, useState, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { device } from 'components/styles/variables'

const ScreenContext = createContext({
  isClient: false,
  isSmallScreen: false,
  isMobile: false,
})

const ScreenProvider: React.FC = ({ children }) => {
  const [isClient, setClient] = useState(false)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true)
    }
  }, [])

  const isSmallScreen = useMediaQuery({ query: device.tabletOrMobile })
  const isMobile = useMediaQuery({ query: device.mobile })

  return (
    <ScreenContext.Provider
      value={{
        isClient,
        isSmallScreen,
        isMobile,
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}

export default ScreenContext
export { ScreenProvider }
