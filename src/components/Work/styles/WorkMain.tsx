import styled from 'styled-components'
import { animated } from 'react-spring'

import Main from 'components/styles/Main'

const WorkMain = styled(Main)`
  margin: 12rem auto 0;
  padding: 1.5rem 1rem;

  p {
    display: flex;
    align-items: center;
    margin-top: 3.8rem;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 2.8rem;
  }
`

const AnimatedWorkMain = animated(WorkMain)

export default WorkMain

export { AnimatedWorkMain }
