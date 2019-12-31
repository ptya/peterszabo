import styled, { css } from 'styled-components'

import { device, colors } from 'components/styles/variables'

const SocialWrapper = styled.aside`
  display: flex;
  /* border: 1px solid ${colors.bgGrey}; */
  flex-direction: ${props =>
    (props.type === 'row' && 'row') || (props.type === 'col' && 'column')};
  width: ${props =>
    (props.type === 'row' && '100%') || (props.type === 'col' && '65px')};
  height: ${props =>
    (props.type === 'row' && '65px') || (props.type === 'col' && '260px')};

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
    width: ${props =>
      (props.type === 'row' && '360px') || (props.type === 'col' && '65px')};
    height: ${props =>
      (props.type === 'row' && '65px') || (props.type === 'col' && '260px')};
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: ${props =>
      (props.type === 'row' && '220px') || (props.type === 'col' && '55px')};
    height: ${props =>
      (props.type === 'row' && '55px') || (props.type === 'col' && '220px')};
  }
`

export default SocialWrapper
