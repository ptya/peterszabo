// gatsby-browser.js
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ScreenProvider } from './src/components/context/ScreenContext.tsx'

require('typeface-montserrat')
require('typeface-raleway')

export const wrapRootElement = ({ element }) => <ScreenProvider>{element}</ScreenProvider>

wrapRootElement.propTypes = {
  element: PropTypes.any.isRequired,
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`This application has been updated. ` + `Reload to display the latest version?`)
  if (answer === true) {
    window.location.reload()
  }
}
