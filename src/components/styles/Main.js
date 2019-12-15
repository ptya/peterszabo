import styled from 'styled-components'

const Main = styled.main`
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-items: center;
  margin: 17rem auto 2rem;
  width: 700px;

  .title {
    left: -50px;
  }

  p {
    margin: 2rem 0;
    font-size: 1.8rem;
    font-weight: 200;
    display: flex;
    align-items: center;
  }
`

export default Main
