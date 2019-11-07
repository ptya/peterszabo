import styled from 'styled-components'
import { colors } from 'components/styles/variables'

const SubmitBtn = styled.button`
  border: ${props =>
    props.disabled ? `1px solid ${colors.grey}` : `1px solid ${colors.blue}`};
  border-radius: 5px;
  color: ${props => (props.disabled ? `${colors.grey2}` : `${colors.white}`)};
  font-size: 1.6rem;
  text-transform: uppercase;
  background-color: initial;
  height: 50px;
  padding: 0 20px;
`

export default SubmitBtn
