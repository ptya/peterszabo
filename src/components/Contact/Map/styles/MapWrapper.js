import styled from 'styled-components'
import { colors, z } from 'components/styles/variables'

const MapWrapper = styled.aside`
  width: 100%;
  transition: height ease-in-out 0.3s;
  height: ${props => (props.isExtended ? '100vh' : '200px')};
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 2px solid ${colors.blue};
  z-index: ${z.middle};
`

export default MapWrapper
