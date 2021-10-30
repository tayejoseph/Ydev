import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Container from './style'

const PalletOpen = ({ title, details }) => {
  const [openTab, setDisplay] = useState(false)
  return (
    <Container>
      <header onClick={() => setDisplay(!openTab)}>
        <h2>{title}</h2>
        {!openTab ? <MdAdd /> : <IoClose />}
      </header>
      {openTab && <div className="detail--container">{details}</div>}
    </Container>
  )
}

export default PalletOpen
