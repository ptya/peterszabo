import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 17rem auto 2rem;
  width: 700px;
  position: relative;

  .title {
    left: -50px;
  }

  p {
    margin: 2rem 2.5rem;
    font-size: 1.8rem;
    font-weight: 200;
    position: relative;
    line-height: 2.6rem;
  }
  /* &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(35, 50, 71, 0.8);
  } */
`

export default Main
