import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Background from './Background'
import AboutTitle from './AboutTitle'

const Main = styled.main`
  justify-content: center;
  align-items: center;
  margin: 17rem auto 2rem;
  padding: 2rem 3rem;
  width: 750px;
  position: relative;
  perspective: 1000px;

  display: grid;
  grid-template-areas:
    'text pic'
    'text social';
  grid-column-gap: 1rem;

  p {
    font-size: 1.8rem;
    font-weight: 200;
    line-height: 2.6rem;
    position: relative;
  }

  ${AboutTitle} {
    left: -50px;
    top: -20px;
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

const MainWithBackground = ({ children }) => (
  <Main>
    <Background />
    {children}
  </Main>
)

MainWithBackground.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MainWithBackground
