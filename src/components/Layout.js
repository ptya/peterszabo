import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import HomeBackground from 'components/styles/HomeBackground'
import GlobalStyle from './styles/GlobalStyle'

const Layout = props => {
  const { bgEnabled, children } = props
  return (
    <>
      <GlobalStyle />
      {bgEnabled && (
        <HomeBackground>
          <Header {...props} />
          {children}
        </HomeBackground>
      )}
      {!bgEnabled && (
        <>
          <Header {...props} />
          {children}
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgEnabled: PropTypes.bool,
}

Layout.defaultProps = {
  bgEnabled: false,
}

export default Layout
