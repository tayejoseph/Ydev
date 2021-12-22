import React from 'react'
import { HomeContent } from '../../../constants'
import Container from './styles'

const Exclusive = () => {
  return (
    <Container>
      <header>
        <h1 className="u--typo__title2">Ydev exclusive learning</h1>
        <p>
          Enjoy a profitable tech career with our robust curriculum that gives
          you a competitive edge and global relevance.
        </p>
      </header>
      <div className="grid--container">
        {HomeContent.exclusives.map((item) => (
          <div className="grid--item">
            <div className="top--container">
              <h1>{item.title}</h1>
              {item.icon}
            </div>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Exclusive
