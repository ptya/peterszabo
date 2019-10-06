import styled from 'styled-components'
import { Form } from 'formik'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
  width: 630px;

  textarea {
    width: 100%;
  }

  div:nth-of-type(1),
  div:nth-of-type(2) {
    flex: 1 0 40%;
    background: red;
  }

  > * {
    flex: 0 1 100%;
    margin: 10px;
    font-size: 20px;
  }
`

export default StyledForm
