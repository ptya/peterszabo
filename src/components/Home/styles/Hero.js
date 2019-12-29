import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

const Hero = styled.main`
  padding: 300px 225px 0;
  h1,
  h2 {
    text-shadow: 1px 1px 1px ${colors.bg};
  }
  h1 {
    margin: 0;
  }
  h2 {
    margin: 10px 0;
  }

  @media ${device.mobileS} {
    /* -> @media (max-width: 320px)" */
    padding: 14rem 2rem 0;

    h2 {
      margin-top: 15px;
    }
  }
`

export default Hero
