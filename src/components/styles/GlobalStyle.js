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
    font-size: 4.8rem;
  }

  h2, h3 {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 2.8rem;
    color: #dadada;
  }

  * {
  box-sizing: border-box;
  }

  @media ${device.mobileS} {
    /* -> @media (max-width: 320px)" */
    h1, nav {
      font-size: 3.3rem;
    }
    h2,h3 {
      font-size: 1.6rem;
    }
  }
`

export default GlobalStyle
