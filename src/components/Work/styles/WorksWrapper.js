import styled from 'styled-components'

const WorksWrapper = styled.main`
  display: flex;
  margin-top: 4rem;
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0% 100%);
  overflow: hidden;
  article {
    flex-grow: 1;
  }
`

export default WorksWrapper
