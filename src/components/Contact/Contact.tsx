import React, { useState, useContext } from 'react'
import { useSpring } from 'react-spring'

// context
import ScreenContext from 'components/context/ScreenContext'

// hooks
import { useMeasure } from 'components/hooks/useMeasure'

// shared components
import Social from 'components/elements/Social'
import StaticSocial from 'components/elements/StaticSocial'

// shared styles
import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import Background from 'components/styles/Background'

// local components
import ContactForm from './ContactForm'
import Map from './Map'
import Confirm from './Confirm'
import Oops from './Oops'

// local styles
import ContactWrapper from './styles/ContactWrapper'
import { AnimatedContactMain } from './styles/ContactMain'

const Contact: React.FC = () => {
  const [isSent, setSent] = useState(false)
  const [isError, setError] = useState(false)
  const { isMobile } = useContext(ScreenContext)
  const [ref, { height }] = useMeasure()
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
      <AnimatedContactMain style={animation}>
        <Background />
        <AbsoluteTitle>Get in touch</AbsoluteTitle>
        <div ref={ref}>
          {isError && <Oops />}
          {isSent && <Confirm />}
          {!isSent && !isError && (
            <>
              <ContactForm setSent={setSent} setError={setError} />
              {isMobile && <StaticSocial />}
            </>
          )}
        </div>
      </AnimatedContactMain>
      {!isMobile && <Social type="col" />}
      <Map delay={1000} isMobile={isMobile} />
    </ContactWrapper>
  )
}

export default Contact
