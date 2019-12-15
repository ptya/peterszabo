import styled from 'styled-components'
import Main from 'components/styles/Main'

const WorkMain = styled(Main)`
  position: relative;
  display: grid;
  grid-template-areas:
    'title back'
    'content content';
  width: 800px;
  margin: 10rem auto;
  .title {
    grid-area: title;
  }

  .back {
    grid-area: back;
    text-align: center;
    margin-bottom: 3rem;
    position: absolute;
    right: -2rem;
  }

  .content {
    grid-area: content;
  }
`

export default WorkMain
