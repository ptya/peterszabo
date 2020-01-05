import styled from 'styled-components'

import { colors, device } from 'components/styles/variables'
import StyledTitleWrapper from 'components/styles/StyledTitleWrapper'

const DetailsWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    'title'
    'tags';
  padding: 3rem 0;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    display: inline-block;
    font-size: 2.4rem;
    text-align: center;
    max-width: 21.6rem;
  }

  ${StyledTitleWrapper} {
    grid-area: title;
    margin-bottom: 0;
    justify-self: center;
    filter: drop-shadow(2px 2px 3px ${colors.darkBlue});
  }

  p {
    padding: 0 3rem;
    width: calc(100% - 1rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;
    grid-area: tags;
  }
  span {
    background: ${colors.blue};
    color: ${colors.white};
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    h2 {
      max-width: unset;
    }
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    grid-template-rows: 3rem 1fr;
    padding: 5rem 0;
  }
`

export default DetailsWrapper
