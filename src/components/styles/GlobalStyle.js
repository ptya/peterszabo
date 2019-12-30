import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import background from 'assets/images/Large-Triangles.svg'
import { colors, device } from './variables'

// TODO: all colors from variables!
// TODO check all z-index properties
// TODO change every px into rem

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 10px;
    font-family: "Raleway", sans-serif;
    color: ${colors.white}
  }

  body {
    background-color: ${colors.darkBg};
    background-image: url(${background});
    /* background by SVGBackgrounds.com */
  }

  h1, nav {
    font-family: "Montserrat",  sans-serif;
    font-weight: 200;
    font-size: 3.3rem;
  }

  h2, h3 {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    color: ${colors.grey};
  }

  * {
  box-sizing: border-box;
  }

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    h1, nav {
      font-size: 4rem;
    }
    h2,h3 {
      font-size: 1.85rem;
    }
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    h1, nav {
      font-size: 4.8rem;
    }
    h2,h3 {
      font-size: 2.8rem;
    }
  }
`

export default GlobalStyle
