import styled from 'styled-components'

import { z } from 'components/styles/variables'

const StyledItem = styled.article`
  position: relative;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: ${z.back};
  }
`

export default StyledItem
