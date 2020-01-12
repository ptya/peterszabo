import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors, device } from 'components/styles/variables'

const ThumbImg = styled(Img)`
  position: relative;
  width: 100%;
  height: 25rem;
  border-left: 0.05rem solid ${colors.shadow};
  border-right: 0.05rem solid ${colors.shadow};

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    height: 100%;
  }
`

const thumbImgStyle = {
  objectFit: 'cover',
  objectPosition: 'center center',
}

export default ThumbImg

export { thumbImgStyle }
