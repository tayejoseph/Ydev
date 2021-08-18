import React from 'react'
import { Union, LoveCode } from '../../../assets/convertedSvgs'
import Container from './styles'

const TestimonalImpact = () => {
  return (
    <Container>
      <section className="section--testimonials">
        <header>
          <LoveCode />
          <h1 className="u--typo__title2">Testimonials</h1>
          <p>
            Our platform continues to make a positive impact on lives and
            changes stories for good
          </p>
        </header>
      </section>
      <section className="section--impacts">
        <header>
          <Union />
          <h1>Our impact stories</h1>
          <p>
            Our schools are never closed... and learning never ends Here is how
            far we have covered
          </p>
        </header>
      </section>
    </Container>
  )
}

export default TestimonalImpact
