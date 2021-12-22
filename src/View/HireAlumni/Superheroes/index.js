import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppLogo } from '../../../assets/convertedSvgs'
import { Button } from '../../../UI'
import Container from './styles'

const Superheroes = () => {
  const history = useHistory()
  return (
    <Container>
      <AppLogo />
      <h1 className="u--typo__title2">Hire superheroes</h1>
      <p>Get the best talents with the right skill sets within 48 hours</p>
      <Button onClick={() => history.push('?popup=hire')}>Start Hiring</Button>
    </Container>
  )
}

export default Superheroes
