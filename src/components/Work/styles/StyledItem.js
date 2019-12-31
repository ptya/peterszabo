import styled from 'styled-components'

import { z } from 'components/styles/variables'

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
`

export default StyledItem
