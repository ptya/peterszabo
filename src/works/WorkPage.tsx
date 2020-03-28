import React from 'react'
import { graphql } from 'gatsby'

// types
import { TMarkdownRemark } from 'types'

// components
import SEO from 'components/SEO'
import WorkItem from 'components/Work/WorkItem'

// styles
import GlobalStyle from 'components/styles/GlobalStyle'

type PageProps = {
  data: TMarkdownRemark,
}

const WorkPage: React.FC<PageProps> = ({
  data
}) => (
    <>
      <GlobalStyle />
      <SEO title={data.markdownRemark.frontmatter.title} />
      <WorkItem data={data} />
    </>
  )

export default WorkPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tags
        images {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
        repos
      }
    }
  }
`
