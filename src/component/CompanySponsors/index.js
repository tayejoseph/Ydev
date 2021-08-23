import React from 'react'
import { v4 as uuid } from 'uuid'
import { aboutUsContent } from '../../constants'
import Container from './styles'

const CompanySponsors = () => {
  return (
    <Container>
      <div className="grid--container">
        {aboutUsContent.parteners.map((item) => (
          <div key={uuid()}>{item}</div>
        ))}
      </div>
    </Container>
  )
}

export default CompanySponsors
