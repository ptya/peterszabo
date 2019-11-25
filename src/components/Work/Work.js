import React from 'react'

import Social from 'components/Social'
import Title from 'components/elements/Title'
import WorkItem from './WorkItem'

import GitHub from './elements/GitHub'

import Main from '../Contact/styles/Main'

const Work = ({ data }) => {
  const foo = 'bar'
  // TODO: modal for individual works
  return (
    <>
      <Main>
        <Title>My Work</Title>
        <p>Check out some of my recent projects</p>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <WorkItem key={node.id} work={node} />
          ))}
        </div>
        <p>
          Or browse my repositories on <GitHub />
        </p>
      </Main>
      <Social type="col" />
    </>
  )
}

export default Work
