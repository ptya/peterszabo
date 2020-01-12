import { css } from 'styled-components'
import { colors, z } from './variables'

export const hoverLink = css`
  a {
    color: ${colors.white};
    font-weight: 300;
    transition: all 0.15s ease-out;
    position: relative;
    text-decoration: none;
    display: inline-block;
  }

  a:before {
    content: '';
    width: 100%;
    height: 0.3rem;
    background: ${colors.blue};
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    transition: all 0.15s ease-in-out;
    z-index: ${z.back};
  }

  a:hover {
    color: ${colors.uberWhite};

    :before {
      bottom: 0;
      height: 100%;
    }
  }
`
