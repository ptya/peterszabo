import styled, { css } from 'styled-components'

import { colors } from './variables'

const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 30px;

  a {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 12px;
    padding: 0 10px;
    color: ${colors.grey};
    font-size: 28px;
    /* font-family: 'Montserrat', sans-serif; */
    /* font-weight: 200; */
    transition: all 0.3s ease-in-out;
    text-shadow: 1px 1px 1px ${colors.bg};
  }

  a:hover,
  a:active,
  a:focus {
    color: ${colors.white};
  }

  /* BURGER MENU SETTINGS */
  ${props =>
    props.type === 'burger' &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 24rem;
      background: ${colors.darkBlue};
      align-items: baseline;
      padding-top: 10rem;
      transition: all 0.2s linear;
      transform: ${props.open ? 'translateX(0)' : 'translateX(-24rem)'};

      a {
        margin: 0;
        padding: 10px;
      }

      .active:after {
        content: '';
        position: absolute;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background-color: ${colors.blue};
        left: 0;
        bottom: 3px;
      }
    `}
`

export default Menu
