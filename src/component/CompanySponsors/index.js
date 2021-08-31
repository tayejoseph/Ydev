import React from 'react'
import { parteners } from '../../constants'
import Container from './styles'

const CompanySponsors = () => {
  return (
    <Container>
      <div className="grid--container">
        {parteners.map((item, index) => (
          <div key={`company-${index}`}>{item}</div>
        ))}
      </div>
    </Container>
  )
}

export default CompanySponsors
