import React, { useState, useContext } from 'react'
import { useSpring, animated } from 'react-spring'

import { useMeasure } from 'components/hooks/useMeasure'

import ScreenContext from 'components/context/ScreenContext'

import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'

import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import Background from 'components/styles/Background'

import ContactForm from './ContactForm'
import Map from './Map'
import Confirm from './Confirm'

import ContactWrapper from './styles/ContactWrapper'
import ContactMain from './styles/ContactMain'

const AnimatedMain = animated(ContactMain)

const Contact = () => {
  const [isSent, setSent] = useState(false)
  const { isMobile } = useContext(ScreenContext)
  const [bind, { height }] = useMeasure()
  const animation = useSpring({
    from: {
      height: isMobile ? 825 : 613,
      opacity: 0,
    },
    height: height + 50, // + 50 padding
    opacity: 1,
  })

  return (
    <ContactWrapper>
      <AnimatedMain style={animation}>
        <Background />
        <AbsoluteTitle>Get in touch</AbsoluteTitle>
        <div {...bind}>
          {isSent && <Confirm />}
          {!isSent && (
            <>
              <ContactForm setSent={setSent} />
              {isMobile && <StaticSocial />}
            </>
          )}
        </div>
      </AnimatedMain>
      {!isMobile && <Social type="col" />}
      <Map delay={1000} isMobile={isMobile} />
    </ContactWrapper>
  )
}

Contact.propTypes = {}

export default Contact
