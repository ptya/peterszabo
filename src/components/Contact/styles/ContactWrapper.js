import styled from 'styled-components'

import { device } from 'components/styles/variables'

const ContactWrapper = styled.div.attrs(() => ({
  size: window.innerHeight,
}))`
  display: flex;
  flex-direction: column;
  min-height: ${props => `${props.size}px`};
  justify-content: space-between;

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    margin-bottom: 2rem;
    min-height: unset;

    p {
      margin: 3.8rem 1rem 2rem;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    margin-bottom: 7rem;
    p {
      margin: 0.5rem 2.5rem;
    }
  }
`

export default ContactWrapper
