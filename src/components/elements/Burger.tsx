import React, { SetStateAction } from 'react'

import MenuBtn from '../styles/MenuBtn'

type Props = {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  mini: boolean
}

const Burger: React.FC<Props> = ({ open, setOpen, mini }) => (
  <MenuBtn open={open} mini={mini} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
    <span>{`${open ? 'Close' : 'Show'} Menu`}</span>
  </MenuBtn>
)

export default Burger
