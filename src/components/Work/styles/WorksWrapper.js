import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'components/styles/variables'

const MainWrapper = styled.section`
  margin-top: 4rem;
  height: 465px;
  filter: drop-shadow(0px 0px 10px ${colors.blue});
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0% 100%);
  padding: 20px 0;
`

const FlexWrapper = styled.div`
  display: flex;
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0% 100%);
  overflow: hidden;
  height: 100%;
  figure {
    flex-grow: 1;
  }
`

const WorksWrapper = ({ children }) => (
  <MainWrapper>
    <FlexWrapper>{children}</FlexWrapper>
  </MainWrapper>
)

WorksWrapper.propTypes = {
  children: PropTypes.any.isRequired,
}

export default WorksWrapper
