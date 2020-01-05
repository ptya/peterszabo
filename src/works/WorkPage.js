import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import SEO from 'components/SEO'

import WorkItem from 'components/Work/WorkItem'

import GlobalStyle from 'components/styles/GlobalStyle'

const WorkPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => (
  <>
    <GlobalStyle />
    <SEO title={data.markdownRemark.frontmatter.title} />
    <WorkItem data={data} />
  </>
)

WorkPage.propTypes = {
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
