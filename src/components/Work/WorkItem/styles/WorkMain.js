import styled from 'styled-components'
import Main from 'components/styles/Main'

const WorkMain = styled(Main)`
  position: relative;
  display: grid;
  grid-template-areas:
    'title back'
    'tag .'
    'content content'
    'repo repo'
    'image image';
  width: 800px;
  margin: 5rem auto 0;

  h2 {
    margin: 0;
  }

  p,
  li {
    line-height: 2.5rem;
  }

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

  .tag {
    grid-area: tag;
  }

  .content {
    grid-area: content;
  }

  .repo {
    grid-area: repo;
  }

  .image {
    grid-area: image;
    position: relative;
    margin: 0;
    display: flex;
  }
`

export default WorkMain
