import styled from 'styled-components'

import { colors, z, device } from './variables'

const MenuBtn = styled.button`
  background: initial;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0;
  margin: 0;
  padding: 6px;
  text-indent: -999px;
  height: ${props => (props.mini && !props.open ? '29px' : '36px')};
  cursor: pointer;
  z-index: ${z.middle};
  transition: all 0.2s linear;

  :focus {
    outline: none;
  }

  & > div {
    background-color: ${colors.white};
    transition: all 0.2s linear;
    transform-origin: left;
    height: 3px;
    width: 30px;
    border-radius: 10px;
  }

  div:first-child {
    transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  div:nth-child(2) {
    width: ${props => (props.mini ? '20px' : '26px')};
    opacity: ${props => (props.open ? 0 : 1)};
    transform: ${props => (props.open ? 'translateX(45px)' : 'translateX(0)')};
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
    /* -> @media (min-width: 768px)" */
    height: 49px;

    & > div {
      height: 5px;
      width: 44px;
    }

    div:nth-child(2) {
      width: 40px;
      transform: ${props =>
        props.open ? 'translateX(55px)' : 'translateX(0)'};
    }
  }
`

export default MenuBtn
