import React, { useState, useRef, useLayoutEffect, useContext } from 'react'
import { Link } from 'gatsby'

// context
import ScreenContext from 'components/context/ScreenContext'

// hooks
import { useTarget } from 'components/hooks/useTarget'
import { useActive } from 'components/hooks/useActive'
import { useOnClickOutside } from 'components/hooks/useOnClickOutside'

// local elements
import Logo from './elements/Logo'
import Target from './elements/Target'
import Burger from './elements/Burger'

// local styles
import StyledHeader from './styles/StyledHeader'
import Menu from './styles/Menu'

const Header: React.FC = () => {
  const [active, setActive] = useState<number[]>([])
  const [hovered, setHovered] = useState<number[]>([])
  const [open, setOpen] = useState(false)
  const [miniHeader, setMiniHeader] = useState(false)

  const menu = useRef<HTMLDivElement>(null)
  useOnClickOutside(menu, () => setOpen(false))

  useActive(setActive, setHovered)
  useTarget(active, setHovered)

  const { isClient } = useContext(ScreenContext)

  const isTargetShown = hovered.length > 0
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
    const unset = () => {
      document.body.style.overflow = 'unset'
    }

    document.body.style.overflow = open ? 'hidden' : 'unset'
    return () => unset()
  }, [open])

  console.log("isTargetShown", isTargetShown)

  return (
    <StyledHeader mini={miniHeader}>
      <div ref={menu}>
        <Burger open={open} setOpen={setOpen} mini={miniHeader} />
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

export default Header
