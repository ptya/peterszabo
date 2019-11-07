import styled from 'styled-components'

import { colors } from 'components/styles/variables'

const InputWrapper = styled.div`
  position: relative;

  label {
    z-index: 100;
    position: absolute;
    top: ${props => (props.isActive ? '-4px' : '0')};
    bottom: 0;
    color: ${colors.lightBlue};
    opacity: ${props => (props.isActive ? '0.5' : '1')};
    line-height: ${props => (props.isActive ? '30px' : '50px')};
    font-weight: ${props => (props.isActive ? 700 : 'normal')};
    font-size: ${props => (props.isActive ? '1rem' : '1.6rem')};
    text-transform: ${props => (props.isActive ? 'uppercase' : 'capitalize')};
    padding: ${props => (props.isActive ? '0 8px 5px' : '0 15px')};
    transition: all 0.1s ease-in-out;
    cursor: text;
  }

  input,
  textarea {
    height: 50px;
    width: 100%;
    font-size: 1.6rem;
    padding: 20px 10px 10px;
    background-color: ${colors.darkBlue};
    border: ${props =>
      props.isError ? '1px solid red' : `1px solid ${colors.grey2}`};
    border-radius: 5px;
    color: ${colors.lightBlue};
  }

  textarea {
    height: 150px;
  }
`

export default InputWrapper
