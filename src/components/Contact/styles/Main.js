import styled from 'styled-components'

const Main = styled.main`
  display: grid;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  align-items: center;

  h1 {
    justify-self: baseline;
    left: -50px;
  }

  p {
    margin: 10px 25px;
    font-size: 1.8rem;
    font-weight: 200;
  }
`

export default Main
