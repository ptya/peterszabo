import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import HeaderSVG from '../styles/HeaderSVG'

const HeaderClipper = ({ height }) => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const html = document.documentElement
    const maxScrollOffset = html.scrollHeight - html.clientHeight

    const handleScroll = () => {
      const currentScrollOffset = window.pageYOffset
      const scrollRatio = Math.max(
        0,
        Math.min(1, currentScrollOffset / maxScrollOffset)
      )
      setScroll(scrollRatio)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const y = Math.floor((1 - scroll) * height)

  return (
    <HeaderSVG
      viewBox={`0 0 100 ${Math.max(1, y)}`}
      y={y}
      preserveAspectRatio="none"
    >
      <polygon
        className="bigger"
        points={`0,0 100,0 100,1 0,${Math.max(1, y)}`}
      />
      <polygon points={`0,0 100,0 0,${Math.max(0, y - 1)}`} />
    </HeaderSVG>
  )
}

HeaderClipper.propTypes = {
  height: PropTypes.number.isRequired,
}

export default HeaderClipper
