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

  const isHome = location.pathname === '/'
  const isTargetShown = !isSmallScreen && hovered.length > 0
  const switchToMini = 25

  // minimize menu when scrolled above $switchToMini
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
    <StyledHeader mini={miniHeader} isHome={isHome}>
      <div ref={menu}>
        {isSmallScreen && (
          <Burger open={open} setOpen={setOpen} mini={miniHeader} />
        )}
        <Menu id="menu" open={open} ref={menu}>
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
      <Logo mini={miniHeader} />
    </StyledHeader>
  )
}
Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
