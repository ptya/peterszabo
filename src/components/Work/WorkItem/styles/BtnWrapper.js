import styled from 'styled-components'

import Wrapper from 'components/styles/Wrapper'
import { colors, device } from 'components/styles/variables'

const BtnWrapper = styled(Wrapper)`
  width: 80px;

  :hover {
    .line {
      stroke-width: 8;
    }
    .one {
      transform-origin: center;
      transform: rotate(135deg);
    }
    .two {
      transform-origin: center;
      transform: rotate(45deg);
    }
  }

  :active {
    .line {
      transform: rotate(0);
      transform-origin: center;
    }
  }
`
export default BtnWrapper
