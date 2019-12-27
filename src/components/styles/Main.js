import styled from 'styled-components'

import AbsoluteTitle from './AbsoluteTitle'

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 17rem auto 2rem;
  padding: 2rem 3rem;
  width: 750px;
  position: relative;
  perspective: 1000px;

  p {
    margin: 2rem 0;
    font-size: 1.8rem;
    font-weight: 200;
  }

  ${AbsoluteTitle} {
    left: -50px;
    top: -20px;
  }
`

export default Main
