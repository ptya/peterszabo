import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Background from 'components/styles/Background'
import Main from 'components/styles/Main'
import { device } from 'components/styles/variables'

// TODO tablet version?

const StyledMain = styled(Main)`
  grid-template-areas:
    'text'
    'pic'
    'social';

  p {
    line-height: 2.8rem;
    position: relative;
  }

  .text {
    grid-area: text;
  }

  .pic {
    grid-area: pic;
  }

  .social {
    grid-area: social;
    justify-self: center;
    text-align: center;
    margin-bottom: 3rem;

    p {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    p {
      line-height: 3rem;
    }

    .social {
      margin-bottom: 0;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    grid-template-areas:
      'text pic'
      'text social';
    grid-column-gap: 4rem;
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
