import React, { useState, useContext } from 'react'

import ScreenContext from 'components/context/ScreenContext'

import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'

import AbsoluteTitle from 'components/styles/AbsoluteTitle'

import Form from './Form'
import Map from './Map'

import Success from './elements/Success'

import ContactMain from './styles/ContactMain'
import Confirm from './styles/Confirm'

// TODO transition animation for confirm message

const Contact = () => {
  const [isSent, setSent] = useState(false)

  const { isMobile } = useContext(ScreenContext)

  return (
    <>
      <ContactMain>
        <AbsoluteTitle>Get in touch</AbsoluteTitle>
        {isSent && (
          <Confirm>
            <Success />
            Thank you for your message!
          </Confirm>
        )}
        {!isSent && (
          <>
            <p>
              Have a question? Want to work together or just say hi?
              <br />
              Drop an email to{' '}
              <a
                href="mailto:contact@peterszabo.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@peterszabo.io
              </a>{' '}
              or use the form below.
            </p>
            <Form setSent={setSent} />
          </>
        )}
        {isMobile && <StaticSocial />}
      </ContactMain>
      {!isMobile && <Social type="col" />}
      <Map delay={1000} isMobile={isMobile} />
    </>
  )
}

Contact.propTypes = {}

export default Contact
