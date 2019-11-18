import styled from 'styled-components'
import { Popup } from 'react-map-gl'

const StyledPopup = styled(Popup)`
  .mapboxgl-popup-content {
    p {
      color: #000;
      font-size: 1.6rem;
    }
  }
  .mapboxgl-popup-close-button {
    width: 10px;
  }
`
