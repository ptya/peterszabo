import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFloat } from 'components/hooks/useFloat'
import InputWrapper from '../styles/InputWrapper'

const Input = ({ field, form: { touched, errors }, placeholder, ...props }) => {
  const [isActive, setIsActive] = useState(field.value.length > 0)

  useFloat(field.name, () => setIsActive(true))

  const customBlur = e => {
    field.onBlur(e)
    if (!field.value) {
      setIsActive(false)
    }
  }

  return (
    <InputWrapper isActive={isActive}>
      <label htmlFor={field.name}>{placeholder}</label>
      <input id={field.name} {...field} {...props} onBlur={customBlur} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
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
}

export default Input
