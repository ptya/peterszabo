import styled from 'styled-components'

import AbsoluteTitle from './AbsoluteTitle'

import { colors, device } from './variables'

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;

  position: relative;
  perspective: 200rem;
  margin: 12rem auto 2rem;
  padding: 2.5rem 3.5rem 2.5rem 2rem;
  width: 30rem;

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

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    width: 33rem;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    width: 65rem;
    margin: 17rem auto 2rem;

    p {
      margin: 2rem 0;
    }

    ${AbsoluteTitle} {
      left: -1rem;
      top: -2rem;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    padding: 5rem 5rem 5rem 3rem;
    width: 75rem;
    perspective: 100rem;

    ${AbsoluteTitle} {
      left: -5rem;
    }
  }
`

export default Main
