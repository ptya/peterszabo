import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'

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
    letter-spacing: 0.5px;
    text-transform: ${props => (props.isActive ? 'uppercase' : 'capitalize')};
    padding: ${props => (props.isActive ? '0 8px 5px' : '0 15px')};
    transition: all 0.1s ease-in-out;
    cursor: text;
  }

  input,
  textarea {
    height: 50px;
    min-width: 100%;
    max-width: 590px;
    font-size: 1.5rem;
    padding: 20px 10px 10px;
    /* background-color: ${colors.darkBlue}; */
    background-color: #1e2a3c;
    border: ${props => (props.isError ? `1px solid ${colors.red}` : `0`)};
    /* border-radius: 5px; */
    clip-path: polygon(0 0, 99% 2%, 99% 98%, 0% 100%);
    color: ${colors.lightBlue};
  }

  textarea {
    height: 150px;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    input, textarea {
      font-size: 1.6rem;
    }
  }
`

export default InputWrapper
