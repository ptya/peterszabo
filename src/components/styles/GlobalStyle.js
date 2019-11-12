import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import background from 'assets/images/Large-Triangles.svg'
import imgBg from 'assets/images/home-bg_1920_b.jpg'
import { colors } from './variables'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 10px;
    font-family: "Raleway", sans-serif;
    color: ${colors.white}
  }

  body {
    background-color: ${colors.bg};
    background-image: url(${background});
    /* background by SVGBackgrounds.com */
  }

  h1, nav {
    font-family: "Montserrat",  sans-serif;
    font-weight: 200;
    font-size: 4.8rem;
  }

  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 2.8rem;
    color: #dadada;

  }

  * {
  box-sizing: border-box;
  }
`

export default GlobalStyle
