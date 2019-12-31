import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFloat } from 'components/hooks/useFloat'
import InputWrapper from '../styles/InputWrapper'
import Error from '../styles/Error'

const Input = ({
  field,
  form: { touched, errors },
  placeholder,
  className,
  ...props
}) => {
  const [isActive, setIsActive] = useState(field.value.length > 0)

  useFloat(field.name, () => setIsActive(true))

  const customBlur = e => {
    field.onBlur(e)
    if (!field.value) {
      setIsActive(false)
    }
  }

  const isError = touched[field.name] && errors[field.name]

  return (
    <InputWrapper isActive={isActive} isError={isError} className={className}>
      <label htmlFor={field.name}>{placeholder}</label>
      <input id={field.name} {...field} {...props} onBlur={customBlur} />
      {isError && <Error>{errors[field.name]}</Error>}
    </InputWrapper>
  )
}

Input.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }),
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Input.defaultProps = {
  className: '',
}

export default Input
