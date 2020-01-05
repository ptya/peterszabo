// gatsby-browser.js
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
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
