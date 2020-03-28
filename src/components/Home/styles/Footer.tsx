import styled from 'styled-components'
import { animated } from 'react-spring'

import { colors, device } from 'components/styles/variables'

import SocialWrapper from 'components/styles/SocialWrapper'

const Footer = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  overflow: hidden;

  h3 {
    margin: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 1.6rem;
    color: ${colors.white};
    text-transform: uppercase;
  }

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    h3 {
      font-size: 2rem;
    }
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    h3 {
      font-size: 2.2rem;
      margin: 0;
    }
    ${SocialWrapper} {
      height: 7rem;
      align-items: flex-end;
    }
  }
`

const AnimatedFooter = animated(Footer)

export default Footer

export { AnimatedFooter }