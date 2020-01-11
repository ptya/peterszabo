import styled, { css } from 'styled-components'

import fb from 'assets/images/3rd-party/facebook.png'
import gh from 'assets/images/3rd-party/github.png'
import ig from 'assets/images/3rd-party/instagram.png'
import li from 'assets/images/3rd-party/linkedin.png'

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
  display: flex;
  flex-grow: 1;
  height: 65px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => colors[props.social]};
  background-color: ${props => colors[props.social]};
  transition: all 0.3s ease-in-out;

  span {
    width: 55px;
    height: 55px;
    text-indent: -9999em;
    background: url(${props => props.img}) no-repeat 0;
    background-size: contain;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 55px;
    flex-grow: 0;
    height: 55px;

    :hover {
      filter: brightness(1.2);
    }

    ${props =>
      props.type === 'row' &&
      css`
        :hover {
          height: 70px;
        }
      `}

    ${props =>
      props.type === 'col' &&
      css`
        :hover {
          width: 75px;
        }
      `}
  }
`

export default SocialBtn
