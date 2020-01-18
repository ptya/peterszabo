/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// TODO close animation?
// TODO navigate between works on the side

// shared elements
import Title from 'components/elements/Title'
import Background from 'components/styles/Background'

// local elements
import CloseBtn from './elements/CloseBtn'
import Repositories from './Repositories'
import Screens from './Screens'

// local styles
import WorkItemMain from './styles/WorkItemMain'
import Tag from './styles/Tag'

const AnimatedMain = animated(WorkItemMain)

const WorkItem = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: { title, tags, repos, images },
    html,
  } = markdownRemark

  const fadeIn = useFadeIn({})
  return (
    <AnimatedMain style={fadeIn}>
      <Title className="title">{title}</Title>
      <Link className="back" to="/work" state={{ fromWork: true }}>
        <CloseBtn>Close</CloseBtn>
      </Link>
      <section className="tag">
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </section>
      <div className="content">
        <Background />
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        {repos.length > 0 && <Repositories className="repo" repos={repos} />}
        <Screens className="image" images={images} title={title} />
      </div>
    </AnimatedMain>
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
