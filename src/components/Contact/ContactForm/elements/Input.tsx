import React, { useState } from 'react'
import { FormikState, FieldInputProps } from 'formik'

// types
import { TValues, TValue } from '../Form'

// hooks
import { useFloat } from 'components/hooks/useFloat'

// local styles
import InputWrapper from '../styles/InputWrapper'
import Error from '../styles/Error'

type Props = {
  field: FieldInputProps<TValue>
  form: FormikState<TValues>
  placeholder: string
  className?: string
}

const Input: React.FC<Props> = ({ field, form: { touched, errors }, placeholder, className = '', ...props }) => {
  const [isActive, setIsActive] = useState(field.value.length > 0)

  useFloat(field.name, () => setIsActive(true))

  const customBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    field.onBlur(e)
    if (!field.value) {
      setIsActive(false)
    }
  }
  const isTouched = Object.keys(touched).includes(field.name)
  const isError = Object.keys(errors).includes(field.name)
  const showError = isTouched && isError

  return (
    <InputWrapper isActive={isActive} isError={showError} className={className}>
      <label htmlFor={field.name}>{placeholder}</label>
      <input id={field.name} {...field} {...props} onBlur={customBlur} />
      {showError && <Error>{errors[field.name as TValue]}</Error>}
    </InputWrapper>
  )
}

export default Input
