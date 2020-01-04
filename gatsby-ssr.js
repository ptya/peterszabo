import React from 'react'
import { ScreenProvider } from './src/components/context/ScreenContext'

require('typeface-montserrat')
require('typeface-raleway')

export const wrapRootElement = ({ element }) => (
  <ScreenProvider>{element}</ScreenProvider>
)
