const path = require('path')

require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `.env`,
})

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const workTemplate = path.resolve(`src/works/WorkPage.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: workTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
