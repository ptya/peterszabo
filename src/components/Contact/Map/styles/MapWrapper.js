import styled from 'styled-components'
import { colors, z, device } from 'components/styles/variables'

const MapWrapper = styled.aside`
  width: 100%;
  height: 20rem;
  position: sticky;
  border-top: 0.2rem solid ${colors.blue};

  .mapboxgl-popup-content {
    p {
      color: ${colors.black};
      font-size: 1.2rem;
      margin: 0;
    }
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: ${z.middle};
  }
`

export default MapWrapper
