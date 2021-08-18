import React from 'react'
import Jumbotron from './Jumbotron'
import Exclusive from './Exclusive'
import TestimonalImpact from './TestimonalImpact'
import OurProcess from './OurProcess'
import FrequentQuestions from './FrequentQuestions'
import Foundation from './Foundation'
import Blogs from './Blogs'
import Container from './styles'

const Home = () => {
  return (
    <Container>
      <Jumbotron />
      <Exclusive />
      <Foundation />
      <TestimonalImpact />
      <OurProcess />
      <FrequentQuestions />
      <Blogs />
    </Container>
  )
}

export default Home
