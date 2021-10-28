import React from 'react'
import { DoubleChat } from '../../../assets/convertedSvgs'
import { Link } from 'react-router-dom'
import { Tabs } from '../../../UI'
import Container from './styles'

const WantMoreInfo = () => {
  return (
    <Container>
      <header>
        <DoubleChat />
        <h1 className="u--typo__title2">Want more info?</h1>
        <p>
          Check out our <Link to="/">Enterprise FAQ page</Link>
        </p>
      </header>
      <Tabs title="Category" tabs={[]} />
    </Container>
  )
}

export default WantMoreInfo
