import React from 'react'
import { animated } from 'react-spring'
import PropTypes from 'prop-types'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// local components
import Form from './Form'

const ContactForm = ({ setSent, setError }) => {
  const fadeIn = useFadeIn({ delay: 200 })

  return (
    <animated.div style={fadeIn}>
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
      <Form setSent={setSent} setError={setError} />
    </animated.div>
  )
}

ContactForm.propTypes = {
  setSent: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
}

export default ContactForm
