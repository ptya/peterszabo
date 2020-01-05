import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router' // eslint-disable-line

import ScreenContext from 'components/context/ScreenContext'

import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'
import AbsoluteTitle from 'components/styles/AbsoluteTitle'

import WorkThumbnail from './WorkThumbnail'
import TransitionDiv from './elements/TransitionDiv'
import GitHub from './elements/GitHub'

import WorkMain from './styles/WorkMain'
import WorksWrapper from './styles/WorksWrapper'

const Work = ({ data, location }) => {
  const { state } = location
  const fromWork = state && Object.keys(state).includes('fromWork')
  const [on, set] = useState(true)

  const items = data.allMarkdownRemark.edges.map(({ node }) => node)

  const [selected, setSelected] = useState(null)

  const { isMobile } = useContext(ScreenContext)

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
