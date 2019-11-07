import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Formik, Field } from 'formik'
import Input from './elements/Input'
import Textarea from './elements/Textarea'
import StyledForm from './styles/StyledForm'
import StyledField from './styles/StyledField'
import SubmitBtn from './styles/SubmitBtn'

const ContactForm = () => {
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
    }

    return errors
  }

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm>
          <Field type="text" name="name" placeholder="Name" component={Input} />
          <Field
            type="email"
            name="email"
            placeholder="Email"
            component={Input}
          />
          <Field
            type="text"
            name="subject"
            placeholder="Subject"
            component={Input}
          />
          <Field
            name="message"
            placeholder="Something nice :)"
            component={Textarea}
          />
          <SubmitBtn type="submit" disabled={isSubmitting || !isValid}>
            Send
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  )
}

//! https://jaredpalmer.com/formik/docs/api/field

ContactForm.propTypes = {}

export default ContactForm
