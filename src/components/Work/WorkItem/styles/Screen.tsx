import styled from 'styled-components'
import Img from 'gatsby-image'

type Props = {
  isInActive: boolean,
}

const Screen = styled(Img) <Props>`
  position: relative;
  max-height: 27rem;
  height: 100%;
  filter: ${props => (props.isInActive ? 'brightness(0.7)' : 'brightness(1)')};
  transition: all 0.2s ease-in-out;
`

const screenImgStyle = (isActive: boolean) => ({
  objectPosition: 'left center',
  width: isActive ? '102%' : '100%',
  height: isActive ? '102%' : '100%',
  transition: 'all 0.3s ease-in-out',
})

export default Screen

export { screenImgStyle }
