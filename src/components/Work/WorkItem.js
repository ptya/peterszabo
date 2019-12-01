import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTransition, useSpring, animated } from 'react-spring'
import Title from 'components/elements/Title'

import DetailsWrapper from './styles/DetailsWrapper'
import StyledItem from './styles/StyledItem'
import WorkTag from './WorkTag'

const AnimatedWrapper = animated(DetailsWrapper)

const WorkItem = ({ work, style }) => {
  const {
    frontmatter: { tags, title },
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
    <StyledItem
      style={style}
      onMouseOver={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onBlur={() => setHovered(false)}
    >
      <animated.img
        style={fade}
        src={`http://www.facetheforce.today/random/360?r=${id}`}
        alt={title}
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

WorkItem.propTypes = {
  work: PropTypes.shape({
    frontmatter: PropTypes.shape({
      tags: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.object,
}

WorkItem.defaultProps = {
  style: {},
}

export default WorkItem
