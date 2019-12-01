import React from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'

import Social from 'components/Social'
import Title from 'components/elements/Title'
import WorkItem from './WorkItem'

import GitHub from './elements/GitHub'

import Main from '../Contact/styles/Main'
import WorkWrapper from './styles/WorksWrapper'

const AnimatedWorkItem = animated(WorkItem)

const Work = ({ data }) => {
  const items = data.allMarkdownRemark.edges.map(({ node }) => node)
  // TODO: modal for individual works

  const transitions = useTransition(items, item => item.id, {
    from: { x: -50, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 50, opacity: 0 },
    trail: 100,
  })

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
              />
            )
        )}
      </WorkWrapper>
      <Social type="col" />
    </>
  )
}

Work.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Work
