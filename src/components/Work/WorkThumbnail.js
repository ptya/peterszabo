import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import { useTransition, useSpring, animated, useChain } from 'react-spring'

import ScreenContext from 'components/context/ScreenContext'

import Title from 'components/elements/Title'

import WorkTag from './WorkTag'

import DetailsWrapper from './styles/DetailsWrapper'
import StyledItem from './styles/StyledItem'
import ThumbImg, { thumbImgStyle } from './styles/ThumbImg'

const AnimatedWrapper = animated(DetailsWrapper)
// const AnimatedItem = animated(StyledItem)
const AnimatedThumbImg = animated(ThumbImg)

// TODO: column version should animate in from each side

const WorkThumbnail = ({ work, onSelect }) => {
  const springRef = useRef()
  const transitionRef = useRef()
  // const WorkThumbnail = ({ work, style, onSelect }) => {
  // const WorkThumbnail = ({ work, style, onSelect }) => {
  const {
    frontmatter: { tags, title, images, path },
  } = work
  const [hovered, setHovered] = useState(false)
  const { isTouch } = useContext(ScreenContext)
  console.log('I AM RENDERING')

  const transitions = useTransition(hovered, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: transitionRef,
  })

  const brightness = isTouch ? '0.6' : '0.4'

  const fade = useSpring({
    filter: `brightness( ${hovered ? 0.6 : 1} )`,
    ref: springRef,
  })

  useChain([springRef, transitionRef])

  return (
    <StyledItem
      // style={style}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseLeave={() => !isTouch && setHovered(false)}
      onBlur={() => !isTouch && setHovered(false)}
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
  style: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
  // isTouch: PropTypes.bool.isRequired,
}

WorkThumbnail.defaultProps = {
  style: {},
}

export default WorkThumbnail
