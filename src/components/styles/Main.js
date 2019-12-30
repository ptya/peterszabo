import styled from 'styled-components'

import AbsoluteTitle from './AbsoluteTitle'

import { colors, z, device } from './variables'

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;

  position: relative;
  perspective: 2000px;
  margin: 12rem auto 2rem;
  padding: 0;
  width: 300px;

  p,
  li {
    font-size: 1.6rem;
    font-weight: 200;
  }

  p {
    margin: 1.5rem 0;
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
    left: 1.5rem;
    top: -1.5rem;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    margin: 17rem auto 2rem;
    padding: 2rem 3rem;
    width: 750px;
    perspective: 1000px;

    p,
    li {
      font-size: 1.8rem;
    }

    p {
      margin: 2rem 0;
    }

    ${AbsoluteTitle} {
      left: -50px;
      top: -20px;
    }
  }
`

export default Main
