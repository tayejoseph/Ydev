import React from 'react'
import Jumbotron from './Jumbotron'
import Hire from './Hire'
import WantMoreInfo from './WantMoreInfo'
import Superheroes from './Superheroes'
import Container from './styles'

const HireAlumni = () => {
  return (
    <Container>
      <Jumbotron />
      <Hire />
      <WantMoreInfo />
      <Superheroes />
    </Container>
  )
}

export default HireAlumni
