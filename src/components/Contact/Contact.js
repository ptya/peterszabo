import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'

import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import { device } from 'components/styles/variables'

import Form from './Form'
import Map from './Map'

import Success from './elements/Success'

import Main from './styles/ContactMain'
import Confirm from './styles/Confirm'

// TODO transition animation for confirm message

const Contact = () => {
  const [isSent, setSent] = useState(false)

  const isMobile = useMediaQuery({ query: device.mobile })

  return (
    <>
      <Main>
        <AbsoluteTitle>Get in touch</AbsoluteTitle>
        {isSent && (
          <Confirm>
            <Success />
            Thank you for your message!
          </Confirm>
        )}
        {!isSent && (
          <>
            <p>Have a question? Want to work together or just say hi?</p>
            <Form setSent={setSent} />
          </>
        )}
        {isMobile && <StaticSocial />}
      </Main>
      {!isMobile && <Social type="col" />}
      <Map delay={1000} isMobile={isMobile} />
    </>
  )
}

Contact.propTypes = {}

export default Contact
