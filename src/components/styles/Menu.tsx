import styled from 'styled-components'

import { colors, device, z } from './variables'

type Props = {
  open: boolean
}

const Menu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 24rem;
  padding: 10rem 3rem 0;
  background: ${colors.darkBlue};
  transition: all 0.2s linear;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-24rem)')};
  z-index: ${z.high};

  a {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    margin: 1rem 0;
    padding: 1rem;
    color: ${colors.grey};
    font-size: 2.8rem;
    transition: all 0.3s ease-in-out;
    text-shadow: 0.1rem 0.1rem 0.1rem ${colors.bg};
  }

  a:hover,
  a:active,
  a:focus {
    color: ${colors.white};
  }

  .active:after {
    content: '';
    position: absolute;
    height: 0.4rem;
    width: 100%;
    border-radius: 1rem;
    background-color: ${colors.blue};
    left: 0;
    bottom: 0.3rem;
  }

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    width: 26rem;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-26rem)')};

    a {
      margin: 1rem 1rem;
    }
  }
  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    width: 32rem;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-32rem)')};
    padding: 20rem 5rem 0;

    a {
      margin: 2rem 1rem;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding: 0 3rem;
    height: unset;
    width: unset;
    background: unset;
    transform: none;

    a {
      margin: 0 1.2rem;
      padding: 0 1rem;
    }

    .active:after {
      content: unset;
    }
  }
`

export default Menu
