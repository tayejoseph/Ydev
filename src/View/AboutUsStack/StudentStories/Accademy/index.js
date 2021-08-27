import React from 'react'
import { aboutUsContent } from '../../../../constants'
import Container from './styles'

const Accademy = () => {
  return (
    <Container>
      <h1>Ydev academy grads are hired by companies of all sizes</h1>
      <div className="grid--container">
        {aboutUsContent.parteners.map((item) => (
          <div key={item.key}>{item}</div>
        ))}
      </div>
    </Container>
  )
}

export default Accademy
