import styled from 'styled-components'

import { colors, z } from 'components/styles/variables'

const TransitionWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: ${z.top};
  div {
    position: absolute;
    background: ${colors.darkBg};
    border: 0.1rem solid ${colors.bg};
  }
`

export default TransitionWrapper
