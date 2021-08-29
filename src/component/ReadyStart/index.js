import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const ReadyStart = ({ withBackDrop = false, content = 'Ready to start?' }) => {
  const history = useHistory()
  return (
    <Container withBackDrop={withBackDrop}>
      <AppLogo />
      <h1>{content}</h1>
      <Button onClick={() => history.push('?modal=apply')}>Apply now</Button>
    </Container>
  )
}

export default ReadyStart
