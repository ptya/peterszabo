import styled from 'styled-components'

const StyledArrow = styled.svg`
  padding: 0 20px;
  width: 89px;
  .edges {
    transition: all 0.3s ease-in-out;
  }

  :hover {
    .edges {
      transform: translateY(-20px);
    }
  }

  :active {
    .edges {
      transform: translateY(-15px);
    }
  }
`

export default StyledArrow
