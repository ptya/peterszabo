/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useTransition, useSpring, animated } from 'react-spring'
import Img from 'gatsby-image'

// TODO: enter animation for whole page
// TODO: close animation?
// TODO: correct content
// TODO screenshots for work

import Title from 'components/elements/Title'

import styled from 'styled-components'
import WorkMain from './styles/WorkMain'
import CloseBtn from './elements/CloseBtn'

const Screen = styled(Img)`
  width: 250px;
  /* height: 250px; */
  position: relative;
  flex-grow: 1;
`
// TODO: maybe bottom of the screen with clip-path?
const Screens = styled.figure`
  position: relative;
  margin: 0;
  grid-area: image;
  display: flex;
`

const Tags = styled.p`
  grid-area: tag;
  span {
    margin: 0 1rem;
    text-transform: uppercase;
    background: #004daa;
    font-size: 1.2rem;
    padding: 0.5rem;
    font-weight: 400;
  }
`

const Repos = styled.section`
  grid-area: repo;
`

const WorkItem = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: { title, tags, repos, images },
    html,
  } = markdownRemark
  console.log(images)
  return (
    <WorkMain>
      <Title className="title">{title}</Title>
      <Link className="back" to="/work" state={{ fromWork: true }}>
        <CloseBtn>Close</CloseBtn>
      </Link>
      <Tags>
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </Tags>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      {repos.length > 0 && (
        <Repos>
          <h3>Related repositor{repos.length > 1 ? 'ies' : 'y'}:</h3>
          <ul>
            {repos.map((repo, i) => (
              <li key={i}>
                <a href={repo}>{repo.split(/[//]+/).pop()}</a>
              </li>
            ))}
          </ul>
        </Repos>
      )}
      <Screens>
        {images.map((image, i) => (
          <Screen
            fluid={image.childImageSharp.fluid}
            key={i}
            alt={`${title} ${i + 1}`}
          />
        ))}
      </Screens>
    </WorkMain>
  )
}

WorkItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        repos: PropTypes.array.isRequired,
        images: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default WorkItem
