import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { useTransition, useSpring, animated } from 'react-spring'

import ScreenContext from 'components/context/ScreenContext'

import Title from 'components/elements/Title'

import WorkTag from './WorkTag'

import DetailsWrapper from './styles/DetailsWrapper'
import StyledItem from './styles/StyledItem'
import ThumbImg, { thumbImgStyle } from './styles/ThumbImg'

const AnimatedThumbImg = animated(ThumbImg)

const WorkThumbnail = ({ work, onSelect, i }) => {
  const {
    frontmatter: { tags, title, images, path },
  } = work
  const [hovered, setHovered] = useState(false)
  const { isClient, isMobile } = useContext(ScreenContext)

  const transitions = useTransition(hovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const fade = useSpring({
    filter: `brightness(${hovered ? 0.5 : 0.9})`,
  })

  const odd = i % 2

  return (
    <StyledItem
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      onClick={e => onSelect(e)}
      href={path}
      odd={odd}
    >
      <AnimatedThumbImg
        style={fade}
        fluid={images[0].childImageSharp.fluid}
        alt={title}
        imgStyle={thumbImgStyle}
      />
      <DetailsWrapper>
        <Title type="h2" animate={isClient && !isMobile}>
          {title}
        </Title>
        {transitions.map(
          ({ item, props, key }) =>
            item && (
              <animated.p key={key} style={props}>
                {tags.map((tag, ix) => (
                  <WorkTag key={tag + ix} tag={tag} delay={(ix + 1) * 75} />
                ))}
              </animated.p>
            )
        )}
      </DetailsWrapper>
    </StyledItem>
  )
}

WorkThumbnail.propTypes = {
  work: PropTypes.shape({
    frontmatter: PropTypes.shape({
      tags: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
}

export default WorkThumbnail
