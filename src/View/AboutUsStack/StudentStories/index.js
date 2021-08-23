import React from 'react'
import Jumbotron from './Jumbotron'
import Accademy from './Accademy'
import OurStories from './OurStories'
import { ReadyStart } from '../../../component'
import Container from './styles'

const AboutUsStudentStories = () => {
  return (
    <Container>
      <Jumbotron />
      <Accademy />
      <OurStories />
      <ReadyStart />
    </Container>
  )
}

export default AboutUsStudentStories
