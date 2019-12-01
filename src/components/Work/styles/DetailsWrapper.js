import styled from 'styled-components'

import { colors } from 'components/styles/variables'

const DetailsWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    /* background: ${colors.blue}; */
    display: inline-block;
    /* margin: 1rem auto 3rem 1rem; */
    font-size: 2.4rem;
  }
  p {
    padding: 0 3rem;
    width: calc(100% - 1rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;
  }
  span {
    background: ${colors.blue};
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
`

export default DetailsWrapper
