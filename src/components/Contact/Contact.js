import React from 'react'
import Social from 'components/elements/Social'
import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import Form from './Form'
import Map from './Map'

import Main from './styles/ContactMain'

const Contact = () => (
  <>
    <Main>
      <AbsoluteTitle>Get in touch</AbsoluteTitle>
      <p>Have a question? Want to work together or just say hi?</p>
      <Form />
    </Main>
    <Social type="col" />
    <Map delay={1000} />
  </>
)

Contact.propTypes = {}

export default Contact
