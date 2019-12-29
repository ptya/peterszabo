import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'components/styles/variables'
import Screen from './Screen'

const MainWrapper = styled.figure`
  position: relative;
  filter: drop-shadow(0px 2px 5px ${colors.blue});
`

const FlexWrapper = styled.div`
  display: flex;
  clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0% 95%);
  ${Screen}:first-of-type {
    border-right: 1px solid ${colors.blue};
  }

  a {
    flex-grow: 1;
    transition: opacity 0.1s ease-in-out;
  }
`

const ScreensWrapper = ({ children, className }) => (
  <MainWrapper className={className}>
    <FlexWrapper>{children}</FlexWrapper>
  </MainWrapper>
)

ScreensWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
}

export default ScreensWrapper
