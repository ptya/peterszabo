import React from 'react'
import Title from 'components/elements/Title'
import Social from 'components/Social'
import Main from 'components/styles/Main'
import Form from './Form'
import Map from './Map'

const About = () => (
  <>
    <Main>
      <Title>Get in touch</Title>
      <p>Have a question? Want to work together or just say hi?</p>
      <Form />
    </Main>
    <Social type="col" />
    <Map delay={1000} />
  </>
)

About.propTypes = {}

export default About
