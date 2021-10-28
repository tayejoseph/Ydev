import React from 'react'
import { v4 as uuid } from 'uuid'
import { aboutUsContent } from '../../../../constants'
import Container from './styles'

const Accademy = () => {
  return (
    <Container>
      <h1>Some companies that have hired/trained from Ydev Academy</h1>
      <div className="grid--container">
        {aboutUsContent.parteners.map((item) => (
          <div key={uuid()}>{item}</div>
        ))}
      </div>
    </Container>
  )
}

export default Accademy
