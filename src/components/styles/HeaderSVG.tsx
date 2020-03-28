import styled from 'styled-components'
import { colors } from './variables'

const HeaderSVG = styled.svg`
  position: absolute;
  width: 100%;
  transition: all 0.1 ease-in-out;
  height: ${props => `${props.y}px`};
  bottom: ${props => `-${props.y}px`};
  min-height: 0.1rem;
  polygon {
    fill: ${colors.darkBg};
  }

  .bigger {
    fill: ${colors.bgGrey};
  }
`

export default HeaderSVG
