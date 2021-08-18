import React from 'react'
import { Button } from '../../../UI'
import { HomeContent } from '../../../constants'
import Container from './styles'

const Immersive = () => {
  return (
    <Container>
      <div className="col--1">
        <h1>Ydev immersive Curriculum</h1>
        <p>
          Browse through a carefully created curriculum tailored specifically to
          your needs. Our curriculum meets global standards putting you in the
          top 1% in the tech space.
        </p>
        <Button secondary>View our curriculum</Button>
      </div>

      <div className="col--2"></div>
    </Container>
  )
}

export default Immersive
