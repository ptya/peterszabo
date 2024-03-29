import styled, { css } from 'styled-components'

import { z } from 'components/styles/variables'
import StyledArrow from './StyledArrow'

type Props = {
  isExtended: boolean
}

const MapBtn = styled.button<Props>`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: ${props => (props.isExtended ? '0' : '-5rem')};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${z.high};

  ${props =>
    props.isExtended &&
    css`
      ${StyledArrow} {
        transform: rotateX(180deg);
      }
    `}
`

export default MapBtn
