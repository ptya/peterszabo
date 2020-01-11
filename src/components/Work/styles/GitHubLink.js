import styled from 'styled-components'

import GitHubMark from 'assets/images/3rd-party/GitHub-Mark-Light-32px.png'
import { device } from 'components/styles/variables'

const GitHubLink = styled.a`
  display: inline-flex;
  padding: 0 0.6rem;
  align-items: center;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  margin-top: 1rem;

  i {
    background-image: url(${GitHubMark});
    background-size: contain;
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
  }
  img {
    width: 7.5rem;
  }

  :hover,
  :focus,
  :active {
    opacity: 1;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    opacity: 0.8;
    margin-top: 0;
  }
`

export default GitHubLink
