import styled from 'styled-components'

import { colors } from './variables'

const Hero = styled.main`
  margin: 150px 225px;
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
