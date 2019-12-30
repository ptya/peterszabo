import styled, { css } from 'styled-components'

import { device } from 'components/styles/variables'

const SocialWrapper = styled.aside`
  display: flex;
  flex-direction: ${props =>
    (props.type === 'row' && 'row') || (props.type === 'col' && 'column')};
  width: ${props =>
    (props.type === 'row' && '220px') || (props.type === 'col' && '55px')};
  height: ${props =>
    (props.type === 'row' && '55px') || (props.type === 'col' && '220px')};

  ${props =>
    props.type === 'col' &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    `}

  @media ${device.mobileS} {
    /* -> @media (max-width: 320px)" */
    width: ${props =>
      (props.type === 'row' && '100%') || (props.type === 'col' && '55px')};
    height: ${props =>
      (props.type === 'row' && '65px') || (props.type === 'col' && '220px')};
  }
`

export default SocialWrapper
