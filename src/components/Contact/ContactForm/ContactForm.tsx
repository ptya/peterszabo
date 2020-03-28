import React, { Dispatch, SetStateAction } from 'react'
import { animated } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// local components
import Form from './Form'

type Props = {
  setSent: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<boolean>>,
}

const ContactForm: React.FC<Props> = ({ setSent, setError }) => {
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

export default ContactForm
