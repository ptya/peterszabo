import styled, { css } from 'styled-components'

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
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    `}
`

export default SocialWrapper
