import React from 'react'
import { Button } from '../../UI'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const ReadyStart = ({ withBackDrop = false, title }) => {
  return (
    <Container withBackDrop={withBackDrop}>
      <AppLogo />
      <h1 className="u--typo__title2">{title || 'Ready to start?'}</h1>
      <Button>Apply now</Button>
    </Container>
  )
}

export default ReadyStart
