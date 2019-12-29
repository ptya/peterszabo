/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// TODO: enter animation for whole page
// TODO: close animation?

import Title from 'components/elements/Title'
import Background from 'components/styles/Background'

import CloseBtn from './elements/CloseBtn'
import Repositories from './Repositories'
import Screens from './Screens'

import WorkMain from './styles/WorkMain'
import Tag from './styles/Tag'

const WorkItem = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: { title, tags, repos, images },
    html,
  } = markdownRemark
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
      <div className="content">
        <Background />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        {repos.length > 0 && <Repositories className="repo" repos={repos} />}
        <Screens className="image" images={images} title={title} />
      </div>
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
