import React from 'react'
import Title from 'components/elements/Title'
import Form from './Form'
import Main from './styles/Main'
import Map from './Map'

const About = () => (
  <Main>
    <Title>Get in touch</Title>
    <p>Have a question? Want to work together or just say hi?</p>
    <Form />
    <Map/>
  </Main>
)

About.propTypes = {}

export default About
