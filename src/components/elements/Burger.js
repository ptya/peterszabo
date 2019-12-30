import React from 'react'
import PropTypes from 'prop-types'
import MenuBtn from '../styles/MenuBtn'

const Burger = ({ open, setOpen, mini }) => (
  <MenuBtn open={open} mini={mini} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
    <span>{`${open ? 'Close' : 'Show'} Menu`}</span>
  </MenuBtn>
)

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  mini: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Burger
