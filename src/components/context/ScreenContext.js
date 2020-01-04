import React, { createContext, useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import { device } from 'components/styles/variables'

const ScreenContext = createContext()

const ScreenProvider = ({ children }) => {
  const [isClient, setClient] = useState(false)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true)
    }
  }, [])

  const isTouch = useMediaQuery({ query: device.touch })
  const isSmallScreen = useMediaQuery({ query: device.tabletOrMobile })
  const isMobile = useMediaQuery({ query: device.mobile })

  return (
    <ScreenContext.Provider
      value={{
        isClient,
        isTouch,
        isSmallScreen,
        isMobile,
      }}
    >
      {children}
    </ScreenContext.Provider>
  )
}

ScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScreenContext
export { ScreenProvider }
