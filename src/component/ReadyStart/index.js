import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const ReadyStart = ({ withBackDrop = false, title }) => {
  const history = useHistory()
  return (
    <Container withBackDrop={withBackDrop}>
      <AppLogo />
      <h1 className="u--typo__title2">{title || 'Ready to start?'}</h1>
      <Button onClick={() => history.push('?popup=apply')}>Apply now</Button>
    </Container>
  )
}

export default ReadyStart
