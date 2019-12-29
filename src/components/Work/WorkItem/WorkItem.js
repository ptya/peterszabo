/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useTransition, useSpring, animated } from 'react-spring'

// TODO: enter animation for whole page
// TODO: close animation?
// TODO: correct content
// TODO screenshots for work

import Title from 'components/elements/Title'
import styled from 'styled-components'
import CloseBtn from './elements/CloseBtn'
import Repositories from './Repositories'

import WorkMain from './styles/WorkMain'
import Tag from './styles/Tag'
import Screen from './styles/Screen'

// TODO: maybe bottom of the screen with clip-path?

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
      <h2 className="tag">
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      {repos.length > 0 && <Repositories className="repo" repos={repos} />}
      <figure className="image">
        {images.map((image, i) => (
          <Screen
            fluid={image.childImageSharp.fluid}
            key={i}
            alt={`${title} ${i + 1}`}
          />
        ))}
      </figure>
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
