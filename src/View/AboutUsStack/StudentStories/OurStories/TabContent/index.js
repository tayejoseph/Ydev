import React from 'react'
import Container from './styles'

const TabContent = ({ content }) => {
  return (
    <Container>
      {content &&
        content.map((item) => (
          <div className="grid--item" key={item.key}>
            <div className="img--container">
              <img src={item.img} alt={item.name} />
            </div>
            <div>
              <h3>{item.name}</h3>
              <h4>{item.profession}</h4>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
    </Container>
  )
}

export default TabContent
