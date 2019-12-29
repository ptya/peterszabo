import styled from 'styled-components'

import Main from 'components/styles/Main'
import { colors, z } from 'components/styles/variables'

const WorkMain = styled(Main)`
  position: relative;
  display: grid;
  grid-template-areas:
    'title back'
    'tag tag'
    'content content'
    'repo repo'
    'image image';
  width: 800px;
  margin: 3rem auto 0;
  padding: 0;

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }

  p,
  li {
    line-height: 2.5rem;
    font-size: 1.6rem;
  }

  p {
    margin: 1.5rem 0;
  }

  ul {
    margin: 0;
  }

  .repo,
  .markdown {
    a {
      color: ${colors.white};
      font-weight: 300;
      text-decoration-color: ${colors.blue};
      text-decoration-thickness: 0.3rem;
      text-underline-offset: 0.5rem;
      transition: all 0.15s ease-out;
      position: relative;
      display: inline-block;
    }

    a:before {
      content: '';
      width: 100%;
      height: 0;
      background: ${colors.blue};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: height 0.15s ease-out;
      z-index: -1;
    }

    a:hover {
      text-underline-offset: 0;
      color: #fff;

      :before {
        height: 100%;
      }
    }
  }

  .title {
    grid-area: title;
    margin-bottom: 0;
  }

  .back {
    grid-area: back;
    text-align: center;
    position: absolute;
    right: -2rem;
  }

  .tag {
    grid-area: tag;
    justify-self: right;
    margin-top: 1rem;
  }

  .content {
    grid-area: content;
    /* experimental */
    position: relative;
    perspective: 1500px;
    margin-top: 14px;

    .markdown {
      position: relative;
      margin: 20px;
      padding: 0 30px;
    }
  }

  .repo {
    grid-area: repo;
    padding: 0 30px;
    margin: 0 20px;
  }

  .image {
    grid-area: image;
    margin: 20px auto 50px;
    width: 700px;
  }
`

export default WorkMain
