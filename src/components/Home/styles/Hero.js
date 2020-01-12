import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

const Hero = styled.main`
  padding: 16rem 2rem 0;
  h1,
  h2 {
    text-shadow: 0.1rem 0.1rem 0.1rem ${colors.bg};
  }
  h1 {
    margin: 0;
  }
  h2 {
    margin-top: 1.5rem;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    padding: 30rem 6rem 0;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    padding: 30rem 22.5rem 0;

    h2 {
      margin: 1rem 0;
    }
  }
`

export default Hero
