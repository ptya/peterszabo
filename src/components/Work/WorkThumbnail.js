import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTransition, useSpring, animated } from 'react-spring'
import Title from 'components/elements/Title'

import WorkTag from './WorkTag'

import DetailsWrapper from './styles/DetailsWrapper'
import StyledItem from './styles/StyledItem'
import ThumbImg, { thumbImgStyle } from './styles/ThumbImg'

const AnimatedWrapper = animated(DetailsWrapper)
const AnimatedItem = animated(StyledItem)
const AnimatedThumbImg = animated(ThumbImg)

const WorkThumbnail = ({ work, style, onSelect, isMobile }) => {
  const {
    frontmatter: { tags, title, images, path },
  } = work
  const [hovered, setHovered] = useState(false)

  // in case of window size falls below then change behaviour instantly
  useEffect(() => {
    if (isMobile) {
      setHovered(true)
    } else {
      setHovered(false)
    }
  }, [isMobile])

  const transitions = useTransition(hovered, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const brightness = isMobile ? '0.6' : '0.4'

  const fade = useSpring({
    filter: `brightness( ${hovered ? brightness : '1'} )`,
  })

  return (
    <AnimatedItem
      style={style}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onBlur={() => !isMobile && setHovered(false)}
      onClick={e => onSelect(e)}
      href={path}
    >
      <AnimatedThumbImg
        style={fade}
        fluid={images[0].childImageSharp.fluid}
        alt={title}
        imgStyle={thumbImgStyle}
      />
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <AnimatedWrapper style={props} key={key}>
              <Title type="h2">{title}</Title>
              <p>
                {tags.map((tag, i) => (
                  <WorkTag key={tag + i} tag={tag} delay={(i + 1) * 75} />
                ))}
              </p>
            </AnimatedWrapper>
          )
      )}
    </AnimatedItem>
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
  style: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

WorkThumbnail.defaultProps = {
  style: {},
}

export default WorkThumbnail
