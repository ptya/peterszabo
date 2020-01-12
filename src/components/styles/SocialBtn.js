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
  height: 6.5rem;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${props => colors[props.social]};
  background-color: ${props => colors[props.social]};
  transition: all 0.3s ease-in-out;

  span {
    width: 5.5rem;
    height: 5.5rem;
    text-indent: -9999em;
    background: url(${props => props.img}) no-repeat 0;
    background-size: contain;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 5.5rem;
    flex-grow: 0;
    height: 5.5rem;

    :hover {
      filter: brightness(1.2);
    }

    ${props =>
      props.type === 'row' &&
      css`
        :hover {
          height: 7rem;
        }
      `}

    ${props =>
      props.type === 'col' &&
      css`
        :hover {
          width: 7.5rem;
        }
      `}
  }
`

export default SocialBtn
