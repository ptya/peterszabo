import { css } from 'styled-components'
import { colors } from './variables'

export const hoverLink = css`
  a {
    color: ${colors.white};
    font-weight: 300;
    transition: all 0.15s ease-out;
    position: relative;
    text-decoration: none;
  }

  a:before {
    content: '';
    width: 100%;
    height: 0.3rem;
    background: ${colors.blue};
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    transition: all 0.15s ease-in-out;
    z-index: -1;
  }

  a:hover {
    color: #fff;

    :before {
      bottom: 0;
      height: 100%;
    }
  }
`
