import styled from 'styled-components'

import { colors } from 'components/styles/variables'

const StyledButton = styled.svg`
  width: 50px;
  height: 45px;
  position: relative;

  .line {
    stroke: ${colors.white};
    stroke-width: 6;
    transition: all 0.3s ease-in-out;
  }

  .one {
    transform: rotate(45deg);
    transform-origin: center;
  }

  .two {
    transform: rotate(-45deg);
    transform-origin: center;
  }

  :active {
    .edges {
      transform: translateY(-15px);
    }
  }
`

export default StyledButton
