import React from 'react'
import PropTypes from 'prop-types'

import StaticSocial from 'components/elements/StaticSocial'

import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import AboutMain from './styles/AboutMain'
import ProfilePic from './styles/ProfilePic'

const About = ({ data }) => (
  <>
    <AboutMain>
      <AbsoluteTitle className="title">About Me</AbsoluteTitle>
      <div className="text">
        <p>
          I am Péter from Budapest, Hungary. I am interested in the entire
          frontend playground with a strong focus on React.
        </p>
        <p>
          I am always learning and experimenting. I like to create and
          strategize. I have a strong Project Management background so I can
          fully understand the requirements and the technicalities.
        </p>
        <p>When I am not doing all that, I am an avid gamer and traveler.</p>
      </div>
      <ProfilePic
        className="pic"
        fluid={data.imageOne.childImageSharp.fluid}
        alt="Peter Szabo"
      />
      <StaticSocial className="social" />
    </AboutMain>
  </>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
