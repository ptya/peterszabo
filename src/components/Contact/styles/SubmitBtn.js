import styled, { css } from 'styled-components'
import { colors } from 'components/styles/variables'

const SubmitBtn = styled.button`
  border: 0;
  color: ${props =>
    props.disabled ? `${colors.darkGrey}` : `${colors.white}`};
  font-size: 1.6rem;
  text-transform: uppercase;
  height: 5rem;
  padding: 0 2rem;
  border: 0;
  background: ${props =>
    props.disabled ? `${colors.disabled}` : `${colors.blue}`};
  box-shadow: 0.2rem 0.2rem 0.2rem, ${colors.shadow};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;
  width: 8.5rem;
  height: 5rem;

  ${props =>
    !props.disabled &&
    css`
      :hover,
      :focus {
        background: ${colors.brightBlue};
        font-size: 1.55rem;
      }

      :active {
        font-size: 1.5rem;
        transform: translateY(0.1rem);
      }
    `}
`

export default SubmitBtn
