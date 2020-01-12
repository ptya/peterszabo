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
  gap: 2rem 2rem;
  padding: 2rem 1rem;

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

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    width: 55rem;
    grid-template-areas:
      'name    email'
      'subject subject'
      'message message'
      '.       submit';
    gap: 4rem 2rem;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    margin: 2rem;
    width: 63rem;
  }
`

export default StyledForm
