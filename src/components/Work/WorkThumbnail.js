import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTransition, useSpring, animated } from 'react-spring'
import Title from 'components/elements/Title'

import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { colors } from 'components/styles/variables'

import DetailsWrapper from './styles/DetailsWrapper'
import StyledItem from './styles/StyledItem'
import WorkTag from './WorkTag'

const AnimatedWrapper = animated(DetailsWrapper)
const AnimatedItem = animated(StyledItem)

const ThumbImg = styled(Img)`
  position: relative;
  width: 100%;
  height: 100%;
  border-left: 0.5px solid ${colors.shadow};
  border-right: 0.5px solid ${colors.shadow};
`

const AnimatedThumbImg = animated(ThumbImg)

const imgStyle = {
  objectFit: 'cover',
  objectPosition: 'center center',
}

// TODO correct images for the thumbnails

const WorkItem = ({ work, style, onSelect }) => {
  const {
    frontmatter: { tags, title, images },
    id,
  } = work
  const [hovered, setHovered] = useState(false)

  const transitions = useTransition(hovered, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const fade = useSpring({
    filter: `brightness( ${hovered ? '0.4' : '1'} )`,
  })

  return (
    <AnimatedItem
      style={style}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
      onClick={e => onSelect(e)}
    >
      <AnimatedThumbImg
        style={fade}
        fluid={images[0].childImageSharp.fluid}
        alt={title}
        imgStyle={imgStyle}
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

WorkItem.propTypes = {
  work: PropTypes.shape({
    frontmatter: PropTypes.shape({
      tags: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
}

WorkItem.defaultProps = {
  style: {},
}

export default WorkItem
