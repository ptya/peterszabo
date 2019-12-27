import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Background from 'components/styles/Background'
import Main from 'components/styles/Main'

const StyledMain = styled(Main)`
  grid-template-areas:
    'text pic'
    'text social';
  grid-column-gap: 1rem;

  p {
    line-height: 3rem;
    position: relative;
  }

  .text {
    grid-area: text;
    margin: 2rem 2.5rem;
  }

  .pic {
    grid-area: pic;
  }

  .social {
    grid-area: social;
    justify-self: center;
    text-align: center;

    p {
      margin-bottom: 0.5rem;
    }
  }
`

const AboutMain = ({ children }) => (
  <StyledMain>
    <Background />
    {children}
  </StyledMain>
)

AboutMain.propTypes = {
  children: PropTypes.any.isRequired,
}

export default AboutMain
