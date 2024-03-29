import React from 'react'
import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

const MainWrapper = styled.section`
  filter: drop-shadow(0rem 0rem 0.3rem ${colors.blue});
  padding-bottom: 3rem;

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    clip-path: polygon(0 0, 100% 5%, 100% 95%, 0% 100%);
    margin-top: 4rem;
    height: 46.5rem;
    padding: 2rem 0;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  a {
    flex-grow: 1;
    clip-path: polygon(0 0, 100% 3%, 100% 97%, 0% 100%);
  }

  a:nth-child(2) {
    clip-path: polygon(0 3%, 100% 0%, 100% 100%, 0% 97%);
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    flex-direction: row;
    filter: drop-shadow(0rem 0rem 1rem ${colors.blue});
    clip-path: polygon(0 0, 100% 5%, 100% 95%, 0% 100%);
    margin-top: 0;

    a {
      clip-path: none;
    }

    a:nth-child(2) {
      clip-path: none;
    }
  }
`

const WorksWrapper: React.FC = ({ children }) => (
  <MainWrapper>
    <FlexWrapper>{children}</FlexWrapper>
  </MainWrapper>
)

export default WorksWrapper
