import styled from 'styled-components'

import { colors, z } from 'components/styles/variables'

import background from 'assets/images/Large-Triangles.svg'

const StyledHeader = styled.header`
  padding: 30px 30px 5px;
  display: grid;
  grid-template-columns: 1fr 105px;
  align-items: center;
  position: fixed;
  z-index: ${z.middle};
  width: 100%;
  top: 0;
  right: 0;
`

export default StyledHeader
