import styled from 'styled-components'
import Wrapper from './Wrapper'

import { device } from './variables'

const StyledTitleWrapper = styled(Wrapper)`
  margin-bottom: 1.5rem;

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    margin-bottom: 3rem;
  }
`

export default StyledTitleWrapper
