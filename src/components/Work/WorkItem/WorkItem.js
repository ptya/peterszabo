/* eslint-disable react/no-danger */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useTransition, useSpring, animated } from 'react-spring'

import Title from 'components/elements/Title'

import WorkMain from './styles/WorkMain'
import CloseBtn from './elements/CloseBtn'

const WorkItem = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <WorkMain>
      <Title className="title">{frontmatter.title}</Title>
      <Link className="back" to="/work" state={{ fromWork: true }}>
        <CloseBtn>Close</CloseBtn>
      </Link>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
    </WorkMain>
  )
}

WorkItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default WorkItem
