import styled from 'styled-components'

import fb from 'assets/images/facebook.png'
import gh from 'assets/images/github.png'
import ig from 'assets/images/instagram.png'
import li from 'assets/images/linkedin.png'

import { device, colors } from 'components/styles/variables'

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
  width: 65px;
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => colors[props.social]};
  background-color: ${props => colors[props.social]};
  span {
    /* display: block; */
    width: 55px;
    height: 55px;
    /* background-size: cover; */
    text-indent: -9999em;
    background: url(${props => props.img}) no-repeat 0;
    background-size: contain;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    height: 7rem;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 55px;
    flex-grow: 0;
    height: 55px;
    background-color: initial;
  }
`

export default SocialBtn
