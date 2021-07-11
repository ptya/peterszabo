import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

// shared styles
import { device } from 'components/styles/variables'

type Props = {
  type: 'row' | 'col'
}

const SocialWrapper = styled.aside<Props>`
  display: flex;
  flex-direction: ${props => (props.type === 'row' && 'row') || (props.type === 'col' && 'column')};
  width: ${props => (props.type === 'row' && '100%') || (props.type === 'col' && '6.5rem')};
  height: ${props => (props.type === 'row' && '6.5rem') || (props.type === 'col' && '26rem')};

  ${props =>
    props.type === 'col' &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    `}

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    width: ${props => (props.type === 'row' && '36rem') || (props.type === 'col' && '6.5rem')};
    height: ${props => (props.type === 'row' && '6.5rem') || (props.type === 'col' && '26rem')};
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: ${props => (props.type === 'row' && '22rem') || (props.type === 'col' && '5.5rem')};
    height: ${props => (props.type === 'row' && '5.5rem') || (props.type === 'col' && '22rem')};
  }
`

const AnimatedSocialWrapper = animated(SocialWrapper)

export default SocialWrapper

export { AnimatedSocialWrapper }
