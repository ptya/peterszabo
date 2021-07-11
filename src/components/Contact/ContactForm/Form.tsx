import React, { Dispatch, SetStateAction } from 'react'
import { Formik, Field, FormikHelpers } from 'formik'

// local components
import Input from './elements/Input'
import Textarea from './elements/Textarea'

// local styles
import StyledForm from './styles/StyledForm'
import SubmitBtn from './styles/SubmitBtn'

type Props = {
  setSent: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<boolean>>
}

export type TValues = {
  name: string
  email: string
  subject: string
  message: string
}

export type TValue = 'name' | 'email' | 'subject' | 'message'

const Form: React.FC<Props> = ({ setSent, setError }) => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  } as TValues

  const validate = (values: TValues) => {
    const errors = {} as TValues
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

  const encode = (data: Record<string, string>) =>
    Object.entries(data)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')

  const onSubmit = async (values: TValues, actions: FormikHelpers<TValues>) => {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    }).catch(error => {
      console.error('FETCH FAILED', error)
      setError(true)
    })

    if (response && response.ok) {
      actions.setSubmitting(false)
      actions.resetForm()
      setSent(true)
    } else {
      console.error('REQUEST FAILED', response)
      setError(true)
    }
  }

  return (
    <Formik initialValues={initialValues} initialErrors={{ state: 'empty' }} validate={validate} onSubmit={onSubmit}>
      {({ isSubmitting, isValid }) => (
        <StyledForm name="contact" netlify-honeypot="bot-field" data-netlify="true" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <Field className="name" type="text" name="name" placeholder="Name" component={Input} />
          <Field className="email" type="email" name="email" placeholder="Email" component={Input} />
          <Field className="subject" type="text" name="subject" placeholder="Subject" component={Input} />
          <Field className="message" name="message" placeholder="Something nice :)" component={Textarea} />
          <SubmitBtn className="submit" type="submit" disabled={isSubmitting || !isValid}>
            Send
          </SubmitBtn>
        </StyledForm>
      )}
    </Formik>
  )
}

export default Form
