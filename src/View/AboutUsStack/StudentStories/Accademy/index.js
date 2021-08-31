import React from 'react'
import { aboutUsContent } from '../../../../constants'
import Container from './styles'

const Accademy = () => {
  return (
    <Container>
      <h1>Some companies that have hired from Ydev Academy</h1>
      <div className="grid--container">
        {aboutUsContent.parteners.map((item) => (
          <div key={item.key}>{item}</div>
        ))}
      </div>
    </Container>
  )
}

export default Accademy
