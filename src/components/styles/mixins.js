import { css } from 'styled-components'
import { colors } from './variables'

export const hoverLink = css`
  a {
    color: ${colors.white};
    font-weight: 300;
    text-decoration-color: ${colors.blue};
    text-decoration-thickness: 0.3rem;
    text-underline-offset: 0.5rem;
    transition: all 0.15s ease-out;
    position: relative;
  }

  a:before {
    content: '';
    width: 100%;
    height: 0;
    background: ${colors.blue};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: height 0.15s ease-out;
    z-index: -1;
  }

  a:hover {
    text-underline-offset: 0;
    color: #fff;

    :before {
      height: 100%;
    }
  }
`
