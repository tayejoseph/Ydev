import React from 'react'
import Jumbotron from './Jumbotron'
import { ReachUs } from '../../component'
import Categories from './Categories'
import Container from './styles'

const FAQ = () => {
  return (
    <Container>
      <Jumbotron />
      <Categories />
      <ReachUs />
    </Container>
  )
}

export default FAQ
