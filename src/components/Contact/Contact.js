import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'

import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import { device } from 'components/styles/variables'

import Form from './Form'
import Map from './Map'

import Main from './styles/ContactMain'

const Contact = () => {
  const isMobile = useMediaQuery({ query: device.mobile })

  return (
    <>
      <Main>
        <AbsoluteTitle>Get in touch</AbsoluteTitle>
        <p>Have a question? Want to work together or just say hi?</p>
        <Form />
        {isMobile && <StaticSocial />}
      </Main>
      {!isMobile && <Social type="col" />}
      <Map delay={1000} isMobile={isMobile} />
    </>
  )
}

Contact.propTypes = {}

export default Contact
