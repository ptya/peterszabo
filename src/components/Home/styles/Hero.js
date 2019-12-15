import styled from 'styled-components'

import { colors } from 'components/styles/variables'

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
`

export default Hero
