import styled from 'styled-components'
import { colors, z, device } from 'components/styles/variables'

const MapWrapper = styled.aside`
  width: 100%;
  position: initial;
  border-top: 2px solid ${colors.blue};
  z-index: ${z.middle};

  .mapboxgl-popup-content {
    p {
      color: #000;
      font-size: 1.2rem;
      margin: 0;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

export default MapWrapper
