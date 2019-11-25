import React from 'react'

const WorkItem = ({ work }) => {
  const { frontmatter } = work
  return (
    <article>
      <img
        src={`http://www.facetheforce.today/random/360?r=${work.id}`}
        alt=""
      />
      <h2>{frontmatter.title}</h2>
      <p>
        {frontmatter.tags.map(tag => (
          <span>{tag}</span>
        ))}
      </p>
    </article>
  )
}

export default WorkItem
