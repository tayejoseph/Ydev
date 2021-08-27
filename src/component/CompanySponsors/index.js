import React from 'react'
import { aboutUsContent } from '../../constants'
import Container from './styles'

const CompanySponsors = () => {
  return (
    <Container>
      <div className="grid--container">
        {aboutUsContent.parteners.map((item, index) => (
          <div key={`company-${index}`}>{item}</div>
        ))}
      </div>
    </Container>
  )
}

export default CompanySponsors
