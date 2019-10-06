import styled from 'styled-components'

// import { colors } from "components/_styles/variables";

const InputWrapper = styled.div`
  position: relative;

  label {
    z-index: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    line-height: ${props => (props.isActive ? '30px' : '50px')};
    font-weight: ${props => (props.isActive ? 900 : 'normal')};
    font-size: ${props => (props.isActive ? '10px' : '1rem')};
    text-transform: ${props => (props.isActive ? 'uppercase' : 'capitalize')};
    color: #000;
    padding: ${props => (props.isActive ? '0 15px 10px' : '0 15px')};
    transition: all 0.1s ease-in-out;
    cursor: text;
  }

  input {
    height: 50px;
    width: 100%;
  }
`

export default InputWrapper
