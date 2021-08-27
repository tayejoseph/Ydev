import React from 'react'
import { Button } from '../../UI'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const ReadyStart = ({ withBackDrop = false, content = 'Ready to start?' }) => {
  return (
    <Container withBackDrop={withBackDrop}>
      <AppLogo />
      <h1>{content}</h1>
      <Button>Apply now</Button>
    </Container>
  )
}

export default ReadyStart
