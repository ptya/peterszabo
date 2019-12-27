import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import fullLogo from 'assets/images/logo-full.png'
import logo from 'assets/images/logo.png'

const StyledLogo = styled.img`
  height: 82px;
`
// TODO check eslint warnings/errors for whole project
// TODO do i need full logo?
const Logo = ({ isFull }) => (
  <Link to="/">
    {/* <StyledLogo src={isFull ? fullLogo : logo} alt="Peter Szabo" /> */}
    <StyledLogo src={logo} alt="Peter Szabo" />
  </Link>
)

Logo.propTypes = {
  isFull: PropTypes.bool.isRequired,
}

export default Logo
