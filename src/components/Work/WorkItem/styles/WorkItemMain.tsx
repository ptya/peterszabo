import styled from 'styled-components'
import { animated } from 'react-spring'

import Main from 'components/styles/Main'
import { device, z } from 'components/styles/variables'
import { hoverLink } from 'components/styles/mixins'

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
    margin: 0.3rem auto;

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

  li:before {
    vertical-align: text-bottom;
  }

  .repo,
  .markdown {
    ${hoverLink}
    li {
      a {
        height: 2.9rem;
        vertical-align: middle;
      }
      a:before {
        bottom: 0rem;
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
    z-index: ${z.top};
    justify-self: right;
  }

  .tag {
    grid-area: tag;
    justify-self: right;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content {
    grid-area: content;
    position: relative;
    perspective: 250rem;
    padding: 2rem 0;
  }

  .markdown {
    position: relative;
    margin: 2rem 2rem 0;
    padding: 0.1rem 0;
  }

  .repo {
    grid-area: repo;
    padding: 0;
    margin: 0 2rem;
  }

  .image {
    grid-area: image;
    margin: 2.5rem auto 0;
    width: 27rem;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    margin: 2rem auto 0;
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

    .title {
      justify-self: baseline;
      max-width: unset;
    }

    .back {
      position: absolute;
      right: -2rem;
      padding: 0;
    }

    .image {
      width: 55rem;
      margin: 2rem auto 0;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    width: 80rem;
    padding: 0;

    .tag {
      margin-top: 0;
    }

    .content {
      perspective: 250rem;
    }

    .markdown {
      padding: 0.1rem 3rem;
    }

    .repo {
      padding: 0 3rem;
    }

    .image {
      width: 70rem;
      margin: 2rem auto 0;
    }
  }
`

const AnimatedWorkItemMain = animated(WorkItemMain)

export default WorkItemMain
export { AnimatedWorkItemMain }
