import React from 'react'
import { Parteners } from '../../component'
import Jumbotron from './Jumbotron'
import Exclusive from './Exclusive'
import Immersive from './Immersive'
import TestimonalImpact from './TestimonalImpact'
import OurProcess from './OurProcess'
import FrequentQuestions from './FrequentQuestions'
import Foundation from './Foundation'
import Blogs from './Blogs'
import PodCast from './PodCast'
import Container from './styles'

const Home = () => {
  return (
    <Container>
      <Jumbotron />
      <Exclusive />
      <Foundation />
      <Parteners />
      <Immersive />
      <TestimonalImpact />
      <OurProcess />
      <FrequentQuestions />
      <Blogs />
      <PodCast />
    </Container>
  )
}

export default Home
