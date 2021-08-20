import React from 'react'
import { Button } from '../../UI'
import { Ydev } from '../../assets/convertedSvgs'
import Container from './styles'

const ReadyStart = ({ withBackDrop = false }) => {
  return (
    <Container withBackDrop={withBackDrop}>
      <Ydev />
      <h1>Ready to start?</h1>
      <Button>Apply now</Button>
    </Container>
  )
}

export default ReadyStart
