import React, { useState } from 'react'
import { Button } from '../../../../UI'
import { IoMdClose } from 'react-icons/io'
import { IoAddSharp } from 'react-icons/io5'
import { HireAlumniContent } from '../../../../constants'
import Container from './styles'

const TabContent = ({ content }) => {
  const [openSection, setDisplay] = useState(false)
  return (
    <Container>
      {content.map((item, index) => (
        <div key={item.key}>
          <header
            role="button"
            onClick={() => {
              setDisplay(openSection === index ? false : index)
            }}
          >
            <h3>{item.title}</h3>
            <Button icon>
              {openSection === index ? <IoAddSharp /> : <IoMdClose />}
            </Button>
          </header>
          {openSection === index && (
            <p className="content--container">{item.details}</p>
          )}
        </div>
      ))}
    </Container>
  )
}

export default TabContent
