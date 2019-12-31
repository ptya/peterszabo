import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router' // eslint-disable-line
import { useMediaQuery } from 'react-responsive'

import Social from 'components/elements/Social'
import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import { device } from 'components/styles/variables'

import WorkThumbnail from './WorkThumbnail'
import TransitionDiv from './elements/TransitionDiv'
import GitHub from './elements/GitHub'

import WorkMain from './styles/WorkMain'
import WorksWrapper from './styles/WorksWrapper'

const AnimatedThumbnail = animated(WorkThumbnail)

const Work = ({ data, location }) => {
  const { state } = location
  const fromWork = state && Object.keys(state).includes('fromWork')
  const [on, set] = useState(true)

  const items = data.allMarkdownRemark.edges.map(({ node }) => node)

  const [selected, setSelected] = useState(null)
  const isMobile = useMediaQuery({ query: device.mobile })

  const transitions = useTransition(items, item => item.id, {
    from: {
      x: fromWork ? 0 : -50,
      opacity: fromWork ? 1 : 0,
    },
    enter: { x: 0, opacity: 1 },
    trail: 100,
  })
  const onSelect = (e, item) => {
    e.preventDefault()
    setSelected({ top: e.clientY, left: e.clientX, item })
  }

  return (
    <>
      <WorkMain as="section">
        <AbsoluteTitle className="title" animate={!fromWork}>
          My Work
        </AbsoluteTitle>
        <p>
          Check out some of my recent projects or browse my repositories on{' '}
          <GitHub />
        </p>
      </WorkMain>
      <WorksWrapper>
        {transitions.map(
          ({ item, props: { x, opacity }, key }) =>
            item && (
              <AnimatedThumbnail
                style={
                  isMobile
                    ? {}
                    : {
                        transform: x.interpolate(n => `translateX(${n}px)`),
                        opacity,
                      }
                }
                key={key}
                work={item}
                onSelect={e => onSelect(e, item)}
                isMobile={isMobile}
              />
            )
        )}
      </WorksWrapper>
      {/* <Social type="col" animate={!fromWork} /> */}
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
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              tags: PropTypes.array.isRequired,
              images: PropTypes.array.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Work
