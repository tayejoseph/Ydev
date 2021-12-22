import React from 'react'
import Jumbotron from './Jumbotron'
import EventLists from './EventLists'
import { ReadyStart } from '../../component'
import Container from './styles'

const Events = () => {
  return (
    <Container>
      <Jumbotron />
      <EventLists />
      <ReadyStart />
    </Container>
  )
}

export default Events
