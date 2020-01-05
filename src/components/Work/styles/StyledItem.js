import styled, { keyframes } from 'styled-components'

import { z, device } from 'components/styles/variables'

const enter = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const StyledItem = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: ${z.back};
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    animation: ${enter} 0.4s ease-out 1;
  }
`

export default StyledItem
