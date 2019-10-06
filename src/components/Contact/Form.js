import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Formik, Field } from 'formik'
import Input from './elements/Input'
import Textarea from './elements/Textarea'
import StyledForm from './styles/StyledForm'

const ContactForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      subject: '',
      message: '',
    }}
    validate={values => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Required'
      }
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }, 400)
    }}
  >
    {({ isSubmitting }) => (
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
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </StyledForm>
    )}
  </Formik>
)

//! https://jaredpalmer.com/formik/docs/api/field
// TODO initialValues separately
// TODO validation separately

ContactForm.propTypes = {}

export default ContactForm
