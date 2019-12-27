import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { useTarget } from 'components/hooks/useTarget'
import { useActive } from 'components/hooks/useActive'

import Logo from './elements/Logo'
import Target from './elements/Target'
import HeaderClipper from './elements/HeaderClipper'

import StyledHeader from './styles/StyledHeader'
import Menu from './styles/Menu'

const Header = ({ location }) => {
  const [active, setActive] = useState([])
  const [hovered, setHovered] = useState([])
  useActive(setActive, setHovered)
  useTarget(active, setHovered)

  const isHome = location.pathname === '/'

  return (
    <StyledHeader isHome={isHome}>
      <Menu id="menu">
        <Link id="home" activeClassName="active" to="/">
          Home
        </Link>
        <Link id="about" activeClassName="active" partiallyActive to="/about">
          About
        </Link>
        <Link id="work" activeClassName="active" partiallyActive to="/work">
          Work
        </Link>
        <Link
          id="contact"
          activeClassName="active"
          partiallyActive
          to="/contact"
        >
          Contact
        </Link>
        {hovered.length > 0 && <Target pos={hovered} />}
      </Menu>
      <Logo isFull={location.pathname !== '/'} />
      {/* {!isHome && <HeaderClipper height={40} />} */}
    </StyledHeader>
  )
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
