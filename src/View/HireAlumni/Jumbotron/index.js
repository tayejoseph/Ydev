import React from 'react'
import { Button } from '../../../UI'
import Container from './styles'

const Jumbtron = () => {
  return (
    <Container>
      <h1>
        Expand your access to <span>world-class talents</span>
      </h1>
      <p>
        Hire result-driven software developers for your team without
        geographical constraints. Ydev offers you top-vetted talents that
        produce results and bring greater value to your workplace.
      </p>
      <Button primary>Hire Superheroes</Button>
    </Container>
  )
}

export default Jumbtron
