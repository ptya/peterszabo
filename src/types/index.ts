import { IGatsbyImageData } from 'gatsby-plugin-image'

export type TImage = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
    original: {
      src: string
    }
  }
}

export type TWorkNode = {
  id: string
  html: string
  frontmatter: {
    title: string
    tags: string[]
    path: string
    images: TImage[]
    repos: string[]
  }
}

export type TAllMarkdownRemark = {
  allMarkdownRemark: {
    edges: [
      {
        node: TWorkNode
      }
    ]
  }
}

export type TMarkdownRemark = {
  markdownRemark: TWorkNode
}

export type TLocation = {
  pathname: string
  state?: string
}

export type TSocial = 'fb' | 'gh' | 'ig' | 'li'
