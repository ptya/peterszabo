import styled, { keyframes, css } from 'styled-components'

import { z, device } from 'components/styles/variables'

const enterDesktop = keyframes`
  0% {
    transform: translateX(-5rem);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
const enterMobileOdd = keyframes`
  0% {
    transform: translateX(2rem);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const enterMobileEven = keyframes`
  0% {
    transform: translateX(-2rem);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

type Props = {
  odd: boolean,
}

const StyledItem = styled.a<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  animation:${enterMobileEven} 0.4s ease-out 1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: ${z.back};
  }

  ${props =>
    props.odd &&
    css`
      animation: ${enterMobileOdd} 0.4s ease-out 1;
    `}


@media screen and(${ device.laptop}) {
  /* -> @media (min-width: 1024px)" */
  animation: ${ enterDesktop} 0.4s ease - out 1;
}
`

export default StyledItem
