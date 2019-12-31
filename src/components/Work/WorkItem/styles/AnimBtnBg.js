import styled from 'styled-components'

import { AnimBgRight } from 'components/styles/AnimBg'
import { colors, device } from 'components/styles/variables'

const AnimBtnBg = styled(AnimBgRight)`
  top: 0;
  right: 0;
  border: 1px solid ${colors.bgGrey};

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    border: 0;
  }
`

export default AnimBtnBg
