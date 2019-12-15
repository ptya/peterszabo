import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import GlobalStyle from './styles/GlobalStyle'

const Layout = props => {
  const { children } = props

  return (
    <>
      <GlobalStyle />
      <Header {...props} />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
