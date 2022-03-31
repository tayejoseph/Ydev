import React from 'react'
import { HomeContent } from '../../../constants'
import Container from './styles'

const OurProcess = () => {
  return (
    <Container>
      <header>
        <h1 className="u--typo__title2">Our process in 4 steps</h1>
        <p>Here’s how to begin your journey changes stories for good</p>
      </header>
      <div className="grid--container">
        {HomeContent.processLists.map((item) => (
          <div className="grid--item">
            <div className="grid--header">
              <div>
                <h2>{item.count}</h2>
                {item.icon}
              </div>
              <h1>{item.title}</h1>
            </div>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default OurProcess
