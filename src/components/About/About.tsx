import React from 'react'
import { ImageDataLike, getImage } from 'gatsby-plugin-image'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// shared elements
import StaticSocial from 'components/elements/StaticSocial'

// shared styles
import AbsoluteTitle from 'components/styles/AbsoluteTitle'
import Background from 'components/styles/Background'

// local styles
import { AnimatedAboutMain } from './styles/AboutMain'
import ProfilePic from './styles/ProfilePic'

type Props = {
  data: {
    imageOne: ImageDataLike
  }
}

const About: React.FC<Props> = ({ data }) => {
  const fadeIn = useFadeIn({})
  const image = getImage(data.imageOne)

  return (
    <AnimatedAboutMain style={fadeIn}>
      <Background />
      <AbsoluteTitle className="title">About Me</AbsoluteTitle>
      <div className="text">
        <p>
          I am Péter from Budapest, Hungary. I am interested in the entire frontend playground with a strong focus on
          React.
        </p>
        <p>
          I am always learning and experimenting. I like to create and strategize. I have a strong Project Management
          background so I can fully understand the requirements and the technicalities.
        </p>
        <p>When I am not doing all that, I am an avid gamer and traveler.</p>
      </div>
      <ProfilePic className="pic" image={image} alt="Peter Szabo" />
      <StaticSocial className="social" />
    </AnimatedAboutMain>
  )
}

export default About
