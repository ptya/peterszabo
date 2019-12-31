import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Social from 'components/elements/Social'

import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import { device } from 'components/styles/variables'

import Form from './Form'
import Map from './Map'

import Main from './styles/ContactMain'

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: device.tabletOrMobile })

  return (
    <>
      <Main>
        <AbsoluteTitle>Get in touch</AbsoluteTitle>
        <p>Have a question? Want to work together or just say hi?</p>
        <Form />
        {isTabletOrMobile && (
          <section className="social">
            <p>You can also find me:</p>
            <Social type="row" animate={false} />
          </section>
        )}
      </Main>
      {!isTabletOrMobile && <Social type="col" />}
      <Map delay={1000} isMobile={isTabletOrMobile} />
    </>
  )
}

Contact.propTypes = {}

export default Contact
