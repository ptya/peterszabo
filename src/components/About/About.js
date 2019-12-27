import React from 'react'
import PropTypes from 'prop-types'

import Social from 'components/elements/Social'
import Title from 'components/elements/Title'

import Main from './styles/Main'
import AvatarWrapper from './styles/AvatarWrapper'
import ProfilePic from './styles/ProfilePic'
import WithBackground from './styles/WithBackground'

const About = ({ data }) => (
  <>
    <Main>
      <AvatarWrapper>
        <ProfilePic
          fluid={data.imageOne.childImageSharp.fluid}
          alt="Peter Szabo"
          style={{ position: 'absolute' }}
        />
        <Title className="title">About Me</Title>
      </AvatarWrapper>
      <WithBackground>
        <p>
          I am Péter from Budapest, Hungary. I am interested in the entire
          frontend playground with a strong focus on React.
        </p>
        <p>
          I am always learning and experimenting. I like to create and
          strategize. I have a strong Project Management background so I can
          fully understand the requirements and the technicalities.
        </p>
        <p>When I am not doing all that I am an avid gamer and traveler.</p>
        <p>You can also find me over here:</p>
      </WithBackground>
    </Main>
    <Social type="col" />
  </>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
