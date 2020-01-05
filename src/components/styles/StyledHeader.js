import styled, { css } from 'styled-components'

import { colors, z, device } from 'components/styles/variables'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 2rem 0;
  margin: auto;
  height: 8.2rem;
  width: 100%;
  z-index: ${z.middle};
  transition: all 0.2s linear;

  nav {
    grid-area: nav;
  }

  a {
    grid-area: logo;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    padding: 0 5rem;
    height: 12rem;
  }

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    height: 9.2rem;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    height: 14.5rem;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    display: grid;
    grid-template-columns: 1fr 10.5rem;
    grid-template-areas: 'nav logo';
    padding: 0 3rem 0.5rem;
    justify-content: unset;
  }

  /* *************************** */
  /* MINI HAMBURGER MENU VERSION */
  /* *************************** */

  ${props =>
    props.mini &&
    css`
      height: 5rem;
      padding: 0 2rem;
      background-color: ${colors.darkBg};
      border-bottom: 1px solid ${colors.bgGrey};

      @media screen and (${device.mobileM}) {
        /* -> @media (min-width: 375px)" */
        height: 6rem;
      }

      @media screen and (${device.tablet}) {
        /* -> @media (min-width: 768px)" */
        height: 8rem;
      }
    `}
`

export default StyledHeader
