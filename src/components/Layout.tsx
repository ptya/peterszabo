import React from 'react'

// components
import Header from 'components/Header'

// shared styles
import GlobalStyle from './styles/GlobalStyle'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout
