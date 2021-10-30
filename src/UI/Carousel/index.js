import React from 'react'
import Container from './style'

const Carousel = ({ carouselItems }) => {
  return (
    <Container>
      {carouselItems &&
        carouselItems.map((item) => (
          <div className="carousel--item">
            <header>{item.title}</header>
            <div className="carousel--details">{item.details}</div>
          </div>
        ))}
    </Container>
  )
}
export default Carousel
