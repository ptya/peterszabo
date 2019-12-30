import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import { useTarget } from 'components/hooks/useTarget'
import { useActive } from 'components/hooks/useActive'
import { useOnClickOutside } from 'components/hooks/useOnClickOutside'

import Logo from './elements/Logo'
import Target from './elements/Target'
import Burger from './elements/Burger'

import StyledHeader from './styles/StyledHeader'
import Menu from './styles/Menu'
import { device } from './styles/variables'

const Header = ({ location }) => {
  const [active, setActive] = useState([])
  const [hovered, setHovered] = useState([])
  const [open, setOpen] = useState(false)

  const menu = useRef()

  useOnClickOutside(menu, () => setOpen(false))
  useActive(setActive, setHovered)
  useTarget(active, setHovered)

  const isHome = location.pathname === '/'
  const isTabletOrMobile = useMediaQuery({ query: device.tabletOrMobile })
  const menuType = isTabletOrMobile ? 'burger' : 'default'
  const isTargetShown = menuType === 'default' && hovered.length > 0

  return (
    <StyledHeader type={menuType} isHome={isHome}>
      <div ref={menu}>
        {isTabletOrMobile && <Burger open={open} setOpen={setOpen} />}
        <Menu id="menu" type={menuType} open={open}>
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
          {isTargetShown && <Target pos={hovered} />}
        </Menu>
      </div>
      <Logo isFull={location.pathname !== '/'} />
    </StyledHeader>
  )
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
