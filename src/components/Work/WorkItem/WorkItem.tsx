/* eslint-disable react/no-danger */
import React from 'react'
import { Link } from 'gatsby'

// types
import { TMarkdownRemark } from 'types'

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
import { AnimatedWorkItemMain } from './styles/WorkItemMain'
import Tag from './styles/Tag'

type Props = {
  data: TMarkdownRemark,
}

const WorkItem: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: { title, tags, repos, images },
    html,
  } = markdownRemark

  const fadeIn = useFadeIn({})
  return (
    <AnimatedWorkItemMain style={fadeIn}>
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
    </AnimatedWorkItemMain>
  )
}

export default WorkItem
