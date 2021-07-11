import styled from 'styled-components'

import { colors, device, z } from 'components/styles/variables'

type Props = {
  isActive: boolean
  isError: boolean
}

const InputWrapper = styled.div<Props>`
  position: relative;

  label {
    z-index: ${z.middle};
    position: absolute;
    top: ${props => (props.isActive ? '-0.4rem' : '0')};
    bottom: 0;
    color: ${colors.lightBlue};
    opacity: ${props => (props.isActive ? '0.5' : '1')};
    line-height: ${props => (props.isActive ? '3rem' : '5rem')};
    font-weight: ${props => (props.isActive ? 700 : 'normal')};
    font-size: ${props => (props.isActive ? '1rem' : '1.6rem')};
    letter-spacing: 0.05rem;
    text-transform: ${props => (props.isActive ? 'uppercase' : 'capitalize')};
    padding: ${props => (props.isActive ? '0 0.8rem 0.5rem' : '0 1.5rem')};
    transition: all 0.1s ease-in-out;
    cursor: text;
  }

  input,
  textarea {
    height: 5rem;
    min-width: 100%;
    max-width: 59rem;
    font-size: 1.5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${colors.inputBg};
    border: ${props => (props.isError ? `0.1rem solid ${colors.red}` : `0`)};
    clip-path: polygon(0 0, 99% 2%, 99% 98%, 0% 100%);
    color: ${colors.lightBlue};
  }

  textarea {
    height: 15rem;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    input,
    textarea {
      font-size: 1.6rem;
    }
  }
`

export default InputWrapper
