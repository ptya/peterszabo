import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

const ProfilePic = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  position: absolute;
  bottom: 4rem;
  left: -7.1rem;
  border: 3px solid ${colors.blue};
`

export default ProfilePic
