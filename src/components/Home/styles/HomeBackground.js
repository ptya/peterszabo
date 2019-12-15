import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import { colors } from 'components/styles/variables'

const BackgroundSection = ({ className, children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
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
      className={className}
      fluid={imageData}
      backgroundColor={colors.darkBg}
    >
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
