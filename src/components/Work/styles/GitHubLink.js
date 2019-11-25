import styled from 'styled-components'

import GitHubMark from 'assets/images/GitHub-Mark-Light-32px.png'

const GitHubLink = styled.a`
  display: inline-flex;
  padding: 0 0.6rem;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

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

  :hover {
    opacity: 1;
  }
`

export default GitHubLink
