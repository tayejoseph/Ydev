import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../UI'
import { Questions, AppLogo } from '../../../assets/convertedSvgs'
import Container from './styles'

const FrequentQuestions = () => {
  return (
    <Container>
      <section className="section--questions">
        <header>
          <Questions />
          <h1>Frequently asked questions</h1>
          <p>
            <Link to="/">Know more</Link> about our programs
          </p>
        </header>
      </section>
      <section className="section--ready">
        <AppLogo />
        <h1>Ready to start?</h1>
        <Button>Apply now</Button>
      </section>
    </Container>
  )
}

export default FrequentQuestions
