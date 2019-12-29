import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

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
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 2.2rem;
    color: ${colors.white};
    text-transform: uppercase;
  }

  @media ${device.mobileS} {
    /* -> @media (max-width: 320px)" */
    h3 {
      font-size: 1.6rem;
    }
  }
`

export default Footer
