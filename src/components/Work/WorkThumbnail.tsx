import React, { useState, useContext } from 'react'
import { useTransition, useSpring, animated } from 'react-spring'

// types
import { TWorkNode } from 'types'

// context
import ScreenContext from 'components/context/ScreenContext'

// shared components
import Title from 'components/elements/Title'

// local components
import WorkTag from './WorkTag'

// local styles
import DetailsWrapper from './styles/DetailsWrapper'
import StyledItem from './styles/StyledItem'
import { AnimatedThumbImg, thumbImgStyle } from './styles/ThumbImg'


type Props = {
  work: TWorkNode,
  onSelect: (event: React.MouseEvent<HTMLAnchorElement>) => void,
  i: number,
}

const WorkThumbnail: React.FC<Props> = ({ work, onSelect, i }) => {
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

  const odd = i % 2 === 1

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


export default WorkThumbnail
