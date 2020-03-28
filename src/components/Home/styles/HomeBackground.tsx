import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { colors } from 'components/styles/variables'

const BackgroundSection: React.FC = ({ children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background/bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="div"
      fluid={imageData}
      backgroundColor={colors.darkBg}
      style={{ position: 'fixed', width: '100%', height: '100%' }}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  position: fixed;
`

export default StyledBackgroundSection
