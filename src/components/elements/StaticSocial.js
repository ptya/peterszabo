import React from 'react'
import PropTypes from 'prop-types'

import Social from './Social'

import StaticSection from '../styles/StaticSection'

const StaticSocial = ({ className }) => (
  <StaticSection className={className}>
    <p>You can also find me:</p>
    <Social type="row" animate={false} />
  </StaticSection>
)

StaticSocial.propTypes = {
  className: PropTypes.string,
}

StaticSocial.defaultProps = {
  className: '',
}

export default StaticSocial
