import React from 'react'
import PropTypes from 'prop-types'

import Social from 'components/elements/Social'

import MainWiWithBackground from './styles/MainWithBackground'
import ProfilePic from './styles/ProfilePic'
import AboutTitle from './styles/AboutTitle'

const About = ({ data }) => (
  <>
    <MainWiWithBackground>
      <AboutTitle className="title">About Me</AboutTitle>
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
        <p>When I am not doing all that I am an avid gamer and traveler.</p>
      </div>
      <ProfilePic
        className="pic"
        fluid={data.imageOne.childImageSharp.fluid}
        alt="Peter Szabo"
        imgStyle={{}}
      />
      <section className="social">
        <p>You can also find me:</p>
        <Social type="row" animate={false} />
      </section>
    </MainWiWithBackground>
  </>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About
