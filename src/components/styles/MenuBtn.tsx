import styled from 'styled-components'

import { colors, z, device } from './variables'

type Props = {
  mini: boolean,
  open: boolean,
}

const MenuBtn = styled.button<Props>`
  background: initial;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0;
  margin: 0;
  padding: 0.6rem;
  text-indent: -99rem;
  height: ${props => (props.mini && !props.open ? '2.9rem' : '3.6rem')};
  cursor: pointer;
  z-index: ${z.top};
  transition: all 0.2s linear;

  :focus {
    outline: none;
  }

  & > div {
    background-color: ${colors.white};
    transition: all 0.2s linear;
    transform-origin: left;
    height: 0.3rem;
    width: ${props => (props.mini && !props.open ? '2.4rem' : '3rem')};
    border-radius: 1rem;
  }

  div:first-child {
    transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  div:nth-child(2) {
    width: ${props => (props.mini ? '2rem' : '2.6rem')};
    opacity: ${props => (props.open ? 0 : 1)};
    transform: ${props =>
    props.open ? 'translateX(4.5rem)' : 'translateX(0)'};
  }
  div:nth-child(3) {
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  span {
    font-size: 0.5rem;
    margin: 0;
    padding: 0;
    position: absolute;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px) */
    height: 4.9rem;

    & > div {
      height: 0.5rem;
      width: 4.4rem;
    }

    div:nth-child(2) {
      width: 4rem;
      transform: ${props =>
    props.open ? 'translateX(5.5rem)' : 'translateX(0)'};
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px) */
    display: none;
  }
`

export default MenuBtn
