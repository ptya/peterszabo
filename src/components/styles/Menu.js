import styled from 'styled-components'

import { colors } from './variables'

const Menu = styled.nav`
  /* display: flex; */
  display: grid;
  grid-template-columns: auto auto auto auto;
  position: relative;

  a {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 12px;
    padding: 0 10px;
    color: ${colors.grey};
    font-size: 28px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    transition: all 0.3s ease-in-out;
    text-shadow: 1px 1px 1px ${colors.bg};
  }

  a:hover {
    color: ${colors.white};
  }
`

export default Menu
