import styled, { css } from 'styled-components'
import { colors } from 'components/styles/variables'

const SubmitBtn = styled.button`
  border: 0;
  color: ${props =>
    props.disabled ? `${colors.darkGrey}` : `${colors.white}`};
  font-size: 1.6rem;
  text-transform: uppercase;
  height: 50px;
  padding: 0 20px;
  border: 0;
  background: ${props =>
    props.disabled ? `${colors.disabled}` : `${colors.blue}`};
  box-shadow: 2px 2px 2px ${colors.shadow};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;
  width: 85px;
  height: 50px;

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
        transform: translateY(1px);
      }
    `}
`

export default SubmitBtn
