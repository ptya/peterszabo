import React from 'react'

import Social from './Social'

import StaticSection from '../styles/StaticSection'

type Props = {
  className?: string
}

const StaticSocial: React.FC<Props> = ({ className = '' }) => (
  <StaticSection className={className}>
    <p>You can also find me:</p>
    <Social type="row" animate={false} />
  </StaticSection>
)

export default StaticSocial
