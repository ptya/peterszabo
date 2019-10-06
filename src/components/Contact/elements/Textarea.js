import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFloat } from 'components/hooks/useFloat'
import InputWrapper from '../styles/InputWrapper'

const Textarea = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <textarea {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

Textarea.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }),
  placeholder: PropTypes.string.isRequired,
}

// TODO floating label

export default Textarea
