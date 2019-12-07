import React, { useState } from 'react'
import { useTransition, animated, useSpring, config } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Social from 'components/Social'
import Title from 'components/elements/Title'
import WorkItem from './WorkItem'
import WorkModal from './WorkModal'

import GitHub from './elements/GitHub'

import Main from '../Contact/styles/Main'
import WorkWrapper from './styles/WorksWrapper'

const AnimatedWorkItem = animated(WorkItem)

const Work = ({ data, location }) => {
  const { state } = location
  const fromWork = state && Object.keys(state).includes('fromWork')
  const [on, set] = useState(true)

  const items = data.allMarkdownRemark.edges.map(({ node }) => node)
  // TODO: modal for individual works
  const [selected, setSelected] = useState(null)
  const transitions = useTransition(items, item => item.id, {
    from: { x: -50, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 50, opacity: 0 },
    trail: 100,
  })
  const onSelect = (e, item) => {
    setSelected({ top: e.clientY, left: e.clientX, item })
  }

  return (
    <>
      <Main as="section">
        <Title className="title">My Work</Title>
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
      <Social type="col" />
      {selected && (
        <WorkModal data={selected} callback={() => console.log('done')} />
      )}
      {fromWork && on && (
        <WorkModal
          data={{ top: 500, left: 500 }}
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
