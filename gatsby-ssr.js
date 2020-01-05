import React from 'react'
import PropTypes from 'prop-types'
import { ScreenProvider } from './src/components/context/ScreenContext'

require('typeface-montserrat')
require('typeface-raleway')

export const wrapRootElement = ({ element }) => (
  <ScreenProvider>{element}</ScreenProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.any.isRequired,
}
