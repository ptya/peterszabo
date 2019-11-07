import styled from 'styled-components'
import { Field } from 'formik'
import { colors } from 'components/styles/variables'

const StyledForm = styled(Field)`
  background-color: ${colors.darkBlue};
  border: 1px solid ${colors.grey2};
  border-radius: 5px;
  color: ${colors.lightBlue};
`

export default StyledForm
