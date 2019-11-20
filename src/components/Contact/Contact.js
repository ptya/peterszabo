import React from 'react'
import Title from 'components/elements/Title'
import Social from 'components/Social'
import Form from './Form'
import Map from './Map'
import Main from './styles/Main'

const About = () => (
  <>
    <Main>
      <Title>Get in touch</Title>
      <p>Have a question? Want to work together or just say hi?</p>
      <Form />
    </Main>
    <Social type="col" />
    <Map />
  </>
)

About.propTypes = {}

export default About
