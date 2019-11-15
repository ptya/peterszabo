import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Title from 'components/elements/Title'
import Form from './Form'

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;

  h1 {
    justify-self: baseline;
    left: -50px;
  }

  p {
    margin: 10px 25px;
    font-size: 1.8rem;
    font-weight: 200;
  }
`

const About = () => {
  const [active, setActive] = useState([])
  const [hovered, setHovered] = useState([])

  return (
    <Main>
      <Title>Get in touch</Title>
      <p>Have a question? Want to work together or just say hi?</p>
      <Form />
    </Main>
  )
}
About.propTypes = {}

export default About
