import styled from 'styled-components'

import Main from 'components/styles/Main'
import { colors, z, device } from 'components/styles/variables'

const WorkItemMain = styled(Main)`
  position: relative;
  display: grid;
  grid-template-areas:
    'back'
    'title'
    'tag'
    'content'
    'repo'
    'image';
  margin: 0 auto 5rem;
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
    line-height: 2.8rem;
    font-size: 1.6rem;
  }

  p {
    margin: 1.5rem 0;
  }

  ul {
    margin: 0;
    padding-left: 1rem;
  }

  li {
    margin: 1rem auto;

    a {
      display: inline-block;
      vertical-align: bottom;
      text-overflow: ellipsis;
      max-width: 22rem;
      overflow: hidden;
      white-space: nowrap;
      line-height: 2.7rem;
    }
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
    margin: 1rem 0;
    justify-self: center;
    max-width: 21.6rem;
    text-align: center;
  }

  .back {
    grid-area: back;
    text-align: center;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;
    justify-self: right;
  }

  .tag {
    grid-area: tag;
    justify-self: right;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    justify-content: center;
  }

  .content {
    grid-area: content;
    position: relative;
    perspective: 2500px;
    padding: 2rem 0;
  }

  .markdown {
    position: relative;
    margin: 2rem 2rem 0;
    padding: 1px 0px;
  }

  .repo {
    grid-area: repo;
    padding: 0;
    margin: 0 2rem;
  }

  .image {
    grid-area: image;
    margin: 2.5rem auto 0;
    width: 270px;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 80rem;
    margin: 2rem auto 0;
    padding: 0;
    grid-template-areas:
      'title back'
      'tag tag'
      'content content'
      'repo repo'
      'image image';

    ul {
      padding-left: 4rem;
    }

    p,
    li {
      font-size: 1.8rem;
    }

    li > a {
      max-width: unset;
    }

    .back {
      position: absolute;
      right: -2rem;
      padding: 0;
    }

    .title {
      justify-self: baseline;
      max-width: unset;
    }

    .tag {
      margin-top: 0;
    }

    .content {
      perspective: 2500px;
    }

    .markdown {
      padding: 1px 30px;
    }

    .image {
      width: 700px;
      margin: 2rem auto 0;
    }

    .repo {
      padding: 0 30px;
    }
  }
`

export default WorkItemMain
