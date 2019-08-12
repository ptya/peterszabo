import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { useTarget } from 'components/hooks/useTarget'
import { useActive } from 'components/hooks/useActive'

import Logo from './elements/Logo'

import StyledHeader from './styles/Header'
import Menu from './styles/Menu'
import Target from './styles/Target'

const Header = ({ location }) => {
  const [active, setActive] = useState([])
  const [hovered, setHovered] = useState([])

  useActive(setActive, setHovered)
  useTarget(active, setHovered)

  return (
    <StyledHeader>
      <Logo isFull={location.pathname !== '/'} />
      <Menu id="menu">
        <Link id="home" activeClassName="active" to="/">
          Home
        </Link>
        <Link id="about" activeClassName="active" to="/about/">
          About
        </Link>
        <Link id="work" activeClassName="active" to="/work/">
          Work
        </Link>
        <Link id="contact" activeClassName="active" to="/contact/">
          Contact
        </Link>
        {hovered.length > 0 && <Target pos={hovered} />}
      </Menu>
    </StyledHeader>
  )
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
