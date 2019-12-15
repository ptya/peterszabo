import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router' // eslint-disable-line

import Social from 'components/Social'
import Title from 'components/elements/Title'
import Main from 'components/styles/Main'
import WorkThumbnail from './WorkThumbnail'

import TransitionDiv from './elements/TransitionDiv'
import GitHub from './elements/GitHub'

import WorkWrapper from './styles/WorksWrapper'

const AnimatedWorkItem = animated(WorkThumbnail)

const Work = ({ data, location }) => {
  const { state } = location
  const fromWork = state && Object.keys(state).includes('fromWork')
  const [on, set] = useState(true)

  const items = data.allMarkdownRemark.edges.map(({ node }) => node)

  const [selected, setSelected] = useState(null)
  const transitions = useTransition(items, item => item.id, {
    from: {
      x: fromWork ? 0 : -50,
      opacity: fromWork ? 1 : 0,
    },
    enter: { x: 0, opacity: 1 },
    trail: 100,
  })
  const onSelect = (e, item) => {
    setSelected({ top: e.clientY, left: e.clientX, item })
  }

  return (
    <>
      <Main as="section">
        <Title className="title" animate={!fromWork}>
          My Work
        </Title>
        <p>
          Check out some of my recent projects or browse my repositories on{' '}
          <GitHub />
        </p>
      </Main>
      <WorkWrapper>
        {transitions.map(
          ({ item, props: { x, opacity }, key }) =>
            item && (
              <AnimatedWorkItem
                style={{
                  transform: x.interpolate(n => `translateX(${n}px)`),
                  opacity,
                }}
                key={key}
                work={item}
                onSelect={e => onSelect(e, item)}
              />
            )
        )}
      </WorkWrapper>
      <Social type="col" animate={!fromWork} />
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

Work.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Work
