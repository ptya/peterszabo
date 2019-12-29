import styled from 'styled-components'

import AbsoluteTitle from './AbsoluteTitle'

import { colors, z } from './variables'

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 17rem auto 2rem;
  padding: 2rem 3rem;
  width: 750px;
  position: relative;
  perspective: 1000px;

  p,
  li {
    font-size: 1.8rem;
    font-weight: 200;
  }

  p {
    margin: 2rem 0;
  }

  li {
    list-style: none;
    margin: 0.5rem;
  }

  li:before {
    content: '>';
    margin-right: 1rem;
    color: ${colors.blue};
    font-weight: 500;
  }

  ${AbsoluteTitle} {
    left: -50px;
    top: -20px;
  }
`

export default Main
