import styled from 'styled-components'
import { Form } from 'formik'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 10px;
  width: 630px;
  position: relative;

  textarea {
    width: 100%;
  }

  div:nth-of-type(1),
  div:nth-of-type(2) {
    flex: 1 0 40%;
  }

  > * {
    flex: 0 1 100%;
    margin: 20px 10px;
    font-size: 20px;
  }

  button {
    flex-basis: auto;
  }
`

export default StyledForm
