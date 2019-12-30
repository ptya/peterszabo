import React, { useState, useRef, useEffect } from 'react'
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

// TODO menu open then disable scroll

const Header = ({ location }) => {
  const [active, setActive] = useState([])
  const [hovered, setHovered] = useState([])
  const [open, setOpen] = useState(false)
  const [miniHeader, setMiniHeader] = useState(false)

  const menu = useRef()

  useOnClickOutside(menu, () => setOpen(false))
  useActive(setActive, setHovered)
  useTarget(active, setHovered)

  const isHome = location.pathname === '/'
  const isTabletOrMobile = useMediaQuery({ query: device.tabletOrMobile })

  let menuType
  if (isTabletOrMobile && miniHeader) {
    menuType = 'mini'
  } else if (isTabletOrMobile && !miniHeader) {
    menuType = 'burger'
  } else {
    menuType = 'default'
  }

  const isTargetShown = menuType === 'default' && hovered.length > 0
  const switchToMini = 25
  const isMini = menuType === 'mini'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollOffset = window.pageYOffset
      if (currentScrollOffset >= switchToMini) {
        setMiniHeader(true)
      } else if (currentScrollOffset < switchToMini && miniHeader) {
        setMiniHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <StyledHeader type={menuType} isHome={isHome}>
      <div ref={menu}>
        {isTabletOrMobile && (
          <Burger open={open} setOpen={setOpen} mini={isMini} />
        )}
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
      <Logo isFull={location.pathname !== '/'} mini={isMini} />
    </StyledHeader>
  )
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
