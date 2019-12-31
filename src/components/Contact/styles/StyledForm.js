import styled from 'styled-components'
import { Form } from 'formik'

import { device } from 'components/styles/variables'

const StyledForm = styled(Form)`
  width: 100%;
  position: relative;

  display: grid;
  grid-template-areas:
    'name'
    'email'
    'subject'
    'message'
    'submit';
  gap: 20px 20px;
  padding: 20px 10px;

  .name {
    grid-area: name;
  }
  .email {
    grid-area: email;
  }
  .subject {
    grid-area: subject;
  }
  .message {
    grid-area: message;
  }
  .submit {
    grid-area: submit;
    justify-self: end;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 630px;
    margin: 10px;
    grid-template-areas:
      'name    email'
      'subject subject'
      'message message'
      '.       submit';
    gap: 40px 20px;
  }
`

export default StyledForm
