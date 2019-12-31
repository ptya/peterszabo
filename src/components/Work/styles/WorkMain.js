import styled from 'styled-components'

import Main from 'components/styles/Main'

const WorkMain = styled(Main)`
  grid-template-rows: auto auto auto;
  margin: 12rem auto 0;
  padding: 1.5rem 1rem;

  p {
    display: flex;
    align-items: center;
    margin-top: 3.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export default WorkMain
