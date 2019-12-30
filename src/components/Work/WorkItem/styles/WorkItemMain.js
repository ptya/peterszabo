import styled from 'styled-components'

import Main from 'components/styles/Main'
import { colors, z, device } from 'components/styles/variables'

const WorkItemMain = styled(Main)`
  position: relative;
  display: grid;
  grid-template-areas:
    'title back'
    'tag tag'
    'content content'
    'repo repo'
    'image image';
  width: 800px;
  margin: 0 auto;
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
    position: relative;
    perspective: 1500px;
    padding: 2rem 0;

    .markdown {
      position: relative;
      margin: 20px;
      padding: 1px 30px;
    }
  }

  .repo {
    grid-area: repo;
    padding: 0 30px;
    margin: 0 20px;
  }

  .image {
    grid-area: image;
    margin: 2rem auto 0;
    width: 700px;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 80rem;
    margin: 2rem auto 0;
    padding: 0;

    p,
    li {
      font-size: 1.8rem;
    }
  }
`

export default WorkItemMain
