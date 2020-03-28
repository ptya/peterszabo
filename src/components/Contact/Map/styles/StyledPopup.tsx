import styled from 'styled-components'
import { Popup } from 'react-map-gl'

import { colors } from 'components/styles/variables'

const StyledPopup = styled(Popup)`
  .mapboxgl-popup-content {
    p {
      color: ${colors.black};
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`

export default StyledPopup
