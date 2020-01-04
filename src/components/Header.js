import React, { useState, useRef, useLayoutEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ScreenContext from 'components/context/ScreenContext'

import { useTarget } from 'components/hooks/useTarget'
import { useActive } from 'components/hooks/useActive'
import { useOnClickOutside } from 'components/hooks/useOnClickOutside'

import Logo from './elements/Logo'
import Target from './elements/Target'
import Burger from './elements/Burger'

import StyledHeader from './styles/StyledHeader'
import Menu from './styles/Menu'
import RobotMenu from './styles/RobotMenu'

// TODO SSR mobile detection to custom hook then use it in works and everywhere it is required

const Header = ({ location }) => {
  const [active, setActive] = useState([])
  const [hovered, setHovered] = useState([])
  const [open, setOpen] = useState(false)
  const [miniHeader, setMiniHeader] = useState(false)

  const menu = useRef()

  useOnClickOutside(menu, () => setOpen(false))
  useActive(setActive, setHovered)
  useTarget(active, setHovered)

  const { isClient, isSmallScreen } = useContext(ScreenContext)

  let menuType
  if (isSmallScreen && miniHeader) {
    menuType = 'mini'
  } else if (isSmallScreen && !miniHeader) {
    menuType = 'burger'
  } else {
    menuType = 'default'
  }

  const isHome = location.pathname === '/'
  const isTargetShown = menuType === 'default' && hovered.length > 0
  const switchToMini = 25
  const isMini = menuType === 'mini'

  // minimize menu on small screens when scrolled above $switchToMini
  useLayoutEffect(() => {
    if (!isClient) return
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

  // disable scrollbar when menu is open
  useLayoutEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => (document.body.style.overflow = 'unset')
  }, [open])

  return (
    <StyledHeader type={menuType} isHome={isHome}>
      {!isClient && (
        <RobotMenu>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </RobotMenu>
      )}
      {isClient && (
        <div ref={menu}>
          {isSmallScreen && (
            <Burger open={open} setOpen={setOpen} mini={isMini} />
          )}
          <Menu id="menu" type={menuType} open={open}>
            <Link id="home" activeClassName="active" to="/">
              Home
            </Link>
            <Link
              id="about"
              activeClassName="active"
              partiallyActive
              to="/about"
            >
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
      )}
      <Logo isFull={location.pathname !== '/'} mini={isMini} />
    </StyledHeader>
  )
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
