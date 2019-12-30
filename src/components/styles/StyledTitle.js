import styled from 'styled-components'
import { device } from './variables'

const StyledTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  position: relative;
  margin: 0;

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    font-size: 3.2rem;
  }
`

export default StyledTitle
