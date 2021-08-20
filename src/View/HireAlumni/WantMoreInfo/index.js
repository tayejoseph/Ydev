import React from 'react'
import { DoubleChat } from '../../../assets/convertedSvgs'
import { Link } from 'react-router-dom'
import Container from './styles'

const WantMoreInfo = () => {
  return (
    <Container>
      <header>
        <DoubleChat />
        <h1>Want more info?</h1>
        <p>
          Check out our <Link to="/">Enterprise FAQ page</Link>
        </p>
      </header>
    </Container>
  )
}

export default WantMoreInfo
