import styled from 'styled-components'

import fb from 'assets/images/facebook.png'
import gh from 'assets/images/github.png'
import ig from 'assets/images/instagram.png'
import li from 'assets/images/linkedin.png'

function getUrl(social) {
  switch (social) {
    case 'fb':
      return fb
    case 'gh':
      return gh
    case 'ig':
      return ig
    case 'li':
      return li
    default:
      break
  }
}

const SocialBtn = styled.a.attrs(props => ({
  img: getUrl(props.social),
}))`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    /* display: block; */
    width: 55px;
    height: 55px;
    /* background-size: cover; */
    text-indent: -9999em;
    background: url(${props => props.img}) no-repeat 0;
    background-size: cover;
  }
`

export default SocialBtn
