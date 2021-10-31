import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Container from './style'

const PalletOpen = ({ title, details }) => {
  const [openTab, setDisplay] = useState(false)
  return (
    <Container>
      <header
        onClick={() => {
          if (details) setDisplay(!openTab)
        }}
      >
        <h2>{title}</h2>
        {details && <>{!openTab ? <MdAdd /> : <IoClose />}</>}
      </header>
      {openTab && <div className="detail--container">{details}</div>}
    </Container>
  )
}

export default PalletOpen
