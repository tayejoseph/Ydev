import React from 'react'
import { TitleDeco } from '../../assets/convertedSvgs'
import Container from './styles'

const TitleWithDesign = ({ title, children }) => {
  return (
    <Container className="title--container">
      <TitleDeco />
      <div>
        {children ? children : <h1 className="u--typo__title">{title}</h1>}
      </div>
    </Container>
  )
}

export default TitleWithDesign
