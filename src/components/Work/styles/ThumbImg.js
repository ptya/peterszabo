import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

const ThumbImg = styled(Img)`
  position: relative;
  width: 100%;
  height: 100%;
  border-left: 0.5px solid ${colors.shadow};
  border-right: 0.5px solid ${colors.shadow};
`

const thumbImgStyle = {
  objectFit: 'cover',
  objectPosition: 'center center',
}

export default ThumbImg

export { thumbImgStyle }
