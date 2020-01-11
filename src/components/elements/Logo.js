import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import logo from 'assets/images/logo.png'

import { device } from 'components/styles/variables'

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled.img`
  height: ${props => (props.mini ? '2rem' : '5rem')};
  transition: height 0.2s linear;

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    height: ${props => (props.mini ? '3rem' : '6rem')};
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    height: ${props => (props.mini ? '5.3rem' : '8.2rem')};
  }
`
// TODO check eslint warnings/errors for whole project
const Logo = ({ mini }) => (
  <StyledLink to="/">
    <StyledLogo src={logo} alt="Peter Szabo" mini={mini} />
  </StyledLink>
)

Logo.propTypes = {
  mini: PropTypes.bool.isRequired,
}

export default Logo
