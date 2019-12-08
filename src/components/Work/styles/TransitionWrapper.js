import styled from 'styled-components'

import { colors } from 'components/styles/variables'

const TransitionWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;

  div {
    position: absolute;
    background: ${colors.darkBg};
    border: 1px solid ${colors.bg};
  }
`

export default TransitionWrapper
