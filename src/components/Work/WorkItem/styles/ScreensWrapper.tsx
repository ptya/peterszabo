import React from 'react'
import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'
import Screen from './Screen'

const MainWrapper = styled.figure`
  position: relative;
  filter: drop-shadow(0rem 0.2rem 0.5rem ${colors.blue});
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${Screen}:first-of-type {
    border-right: 0.1rem solid ${colors.blue};
  }

  a {
    flex-grow: 1;
    transition: opacity 0.1s ease-in-out;
    clip-path: polygon(0 3%, 100% 0%, 100% 100%, 0% 97%);
    height: 20rem;
  }

  a:nth-child(even) {
    clip-path: polygon(0 0%, 100% 3%, 100% 97%, 0% 100%);
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 764px)" */
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0% 95%);
    flex-direction: row;

    a {
      clip-path: none;
      height: unset;
    }

    a:nth-child(even) {
      clip-path: none;
    }
  }
`

type Props = {
  className: string,
}

const ScreensWrapper: React.FC<Props> = ({ children, className }) => (
  <MainWrapper className={className}>
    <FlexWrapper>{children}</FlexWrapper>
  </MainWrapper>
)

export default ScreensWrapper
