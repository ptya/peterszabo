import React, { useState, useContext } from 'react'
import { useTransition, useSpring, animated } from 'react-spring'
import { getImage } from 'gatsby-plugin-image'

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
import { AnimatedThumbImg } from './styles/ThumbImg'

type Props = {
  work: TWorkNode
  onSelect: (event: React.MouseEvent<HTMLAnchorElement>) => void
  i: number
}

const WorkThumbnail: React.FC<Props> = ({ work, onSelect, i }) => {
  const {
    frontmatter: { tags, title, images, path },
  } = work
  const [hovered, setHovered] = useState(false)
  const { isClient, isMobile } = useContext(ScreenContext)
  const image = getImage(images[0].childImageSharp.gatsbyImageData)

  const transitions = useTransition(hovered, {
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
      {/* {image && <ThumbImg image={image} alt={title} imgStyle={thumbImgStyle} />} */}
      {image && <AnimatedThumbImg style={fade} image={image} alt={title} />}
      <DetailsWrapper>
        <Title type="h2" animate={isClient && !isMobile}>
          {title}
        </Title>
        {transitions(
          (style, item) =>
            item && (
              <animated.p style={style}>
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
