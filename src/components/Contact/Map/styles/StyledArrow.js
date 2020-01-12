import styled from 'styled-components'

const StyledArrow = styled.svg`
  padding: 0 2rem;
  width: 8.9rem;
  .edges {
    transition: all 0.3s ease-in-out;
  }

  :hover {
    .edges {
      transform: translateY(-2rem);
    }
  }

  :active {
    .edges {
      transform: translateY(-1.5rem);
    }
  }
`

export default StyledArrow
