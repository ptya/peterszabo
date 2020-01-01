import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'

import Input from './elements/Input'
import Textarea from './elements/Textarea'

import StyledForm from './styles/StyledForm'
import SubmitBtn from './styles/SubmitBtn'

// TODO: netlfiy form for messages
// TODO after submitting a message just show a thank you note without the form
// TODO transition animation after submit

const Form = ({ setSent }) => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const validate = values => {
    const errors = {}
    // name validations
    if (!values.name) {
      errors.name = 'Required'
    }
    // email validations
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    // subject line validations
    if (!values.subject) {
      errors.subject = 'Required'
    }
    // message validations
    if (!values.message) {
      errors.message = 'Required'
    } else if (values.message.length < 20) {
      errors.message = 'A few more words please'
    }

    return errors
  }

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false)
    resetForm()
    setSent(true)
  }

  return (
    <Formik
      initialValues={initialValues}
      initialErrors={{ state: 'empty' }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm
          name="contact"
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
        >
          <input type="hidden" name="bot-field" />
          <Field
            className="name"
            type="text"
            name="name"
            placeholder="Name"
            component={Input}
          />
          <Field
            className="email"
            type="email"
            name="email"
            placeholder="Email"
            component={Input}
          />
          <Field
            className="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            component={Input}
          />
          <Field
            className="message"
            name="message"
            placeholder="Something nice :)"
            component={Textarea}
          />
          <SubmitBtn
            className="submit"
            type="submit"
            disabled={isSubmitting || !isValid}
          >
            Send
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  )
}

Form.propTypes = {
  setSent: PropTypes.func.isRequired,
}

export default Form
