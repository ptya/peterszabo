import React, { useState, useContext } from 'react'
import { navigate } from '@reach/router' // eslint-disable-line

// types
import { TAllMarkdownRemark, TLocation } from 'types'


// context
import ScreenContext from 'components/context/ScreenContext'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// shared elements
import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'
import AbsoluteTitle from 'components/styles/AbsoluteTitle'

// local components
import WorkThumbnail from './WorkThumbnail'
import TransitionDiv from './elements/TransitionDiv'
import GitHub from './elements/GitHub'

// local styles
import { AnimatedWorkMain } from './styles/WorkMain'
import WorksWrapper from './styles/WorksWrapper'

type Props = {
  data: TAllMarkdownRemark,
  location: TLocation,
}

type Item = {
  frontmatter: {
    path: string
  }
}

type Selected = {
  top: number,
  left: number,
  item: Item
}

const Work: React.FC<Props> = ({ data, location }) => {
  const { isMobile } = useContext(ScreenContext)

  const [on, set] = useState(true)
  const [selected, setSelected] = useState<Selected | null>(null)

  const onSelect = (e: React.MouseEvent<HTMLAnchorElement>, item: Item) => {
    e.preventDefault()
    setSelected({ top: e.clientY, left: e.clientX, item })
  }

  const fadeIn = useFadeIn({})
  const items = data.allMarkdownRemark.edges.map(({ node }) => node)
  const { state } = location
  const fromWork = state && Object.keys(state).includes('fromWork')

  return (
    <>
      <AnimatedWorkMain style={fadeIn} as="section">
        <AbsoluteTitle className="title" animate={!fromWork}>
          My Work
        </AbsoluteTitle>
        <p>
          Check out some of my recent projects or browse my repositories on{' '}
          <GitHub />
        </p>
      </AnimatedWorkMain>
      <WorksWrapper>
        {items.map((item, i) => (
          <WorkThumbnail
            key={item.id}
            work={item}
            onSelect={e => onSelect(e, item)}
            i={i}
          />
        ))}
      </WorksWrapper>
      {isMobile && <StaticSocial />}
      {!isMobile && <Social type="col" animate={!fromWork} />}
      {selected && (
        <TransitionDiv
          data={selected}
          callback={() => {
            navigate(selected.item.frontmatter.path)
          }}
        />
      )}
      {fromWork && on && (
        <TransitionDiv
          data={{ top: window.innerHeight / 2, left: window.innerWidth / 2 }}
          fromWork
          callback={() => set(false)}
        />
      )}
    </>
  )
}

export default Work
