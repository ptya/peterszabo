import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Title from 'components/elements/Title'
import Form from './Form'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
