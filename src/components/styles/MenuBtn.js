import styled from 'styled-components'

import { colors, z } from './variables'

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
  height: 39px;
  width: 45px;
  cursor: pointer;
  z-index: ${z.middle};

  & > div {
    background-color: ${colors.white};
    transition: all 0.3s linear;
    transform-origin: left;
    height: 3px;
    width: 100%;
    border-radius: 10px;
  }

  div:first-child {
    transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  div:nth-child(2) {
    width: 30px;
    opacity: ${props => (props.open ? 0 : 1)};
    transform: ${props => (props.open ? 'translateX(33px)' : 'translateX(0)')};
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
`

export default MenuBtn
