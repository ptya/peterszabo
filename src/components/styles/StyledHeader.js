import styled, { css } from 'styled-components'

import { colors, z } from 'components/styles/variables'

const StyledHeader = styled.header`
  padding: 3rem 3rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 10.5rem;
  align-items: center;
  position: fixed;
  z-index: ${z.middle};
  width: 100%;
  top: 0;
  right: 0;

  ${props =>
    props.type === 'burger' &&
    css`
      display: flex;
      justify-content: space-between;
      padding: 3rem 2rem 0;
    `}
`

export default StyledHeader
