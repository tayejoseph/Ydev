import React from 'react'
import { AppLogo } from '../../../assets/convertedSvgs'
import { Button } from '../../../UI'
import Container from './styles'

const Superheroes = () => {
  return (
    <Container>
      <AppLogo />
      <h1 className="u--typo__title2">Hire superheroes</h1>
      <p>Get the best talents with the right skill sets within 48 hours</p>
      <Button>Start Hiring</Button>
    </Container>
  )
}

export default Superheroes
