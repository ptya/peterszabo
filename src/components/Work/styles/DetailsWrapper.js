import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

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
    display: inline-block;
    font-size: 2.4rem;
    text-align: center;
    max-width: 21.6rem;
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
    color: ${colors.white};
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    h2 {
      max-width: unset;
    }
  }
`

export default DetailsWrapper
