import React from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'

import Form from './Form'

const ContactForm = ({ setSent, setError }) => {
  const animation = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    delay: 200,
  })

  return (
    <animated.div style={animation}>
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
