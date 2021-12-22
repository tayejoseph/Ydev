import React, { useState, useRef } from 'react'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import Container from './styles'

const LargeCarousel = ({ carousel }) => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNav = (action) => {
    let newIndex = 0
    if (action === 'next') {
      newIndex = activeIndex + 1
    } else {
      newIndex = activeIndex - 1
    }
    console.log(newIndex, carousel.length)
    setActiveIndex(newIndex)
    const activeDom = document.getElementById(`${newIndex}--carousel`)
    console.log(activeDom, 'MMMM')
    containerRef.current.scrollTo({
      left: newIndex === 0 ? 0 : activeDom.offsetLeft - 20,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <div className="action--container">
        <button
          disabled={activeIndex === 0}
          onClick={() => handleNav('previous')}
        >
          <IoMdArrowRoundBack />
        </button>
        <button
          disabled={activeIndex === carousel.length - 1}
          onClick={() => handleNav('next')}
        >
          <IoMdArrowRoundForward />
        </button>
      </div>
      <div className="carousel--row" ref={containerRef}>
        {carousel &&
          carousel.map((item, index) => (
            <div
              id={`${index}--carousel`}
              className={`img--container ${
                index === activeIndex ? 'active--container' : ''
              }`}
            >
              <img src={item} alt={'Carousel'} />
            </div>
          ))}
      </div>
    </Container>
  )
}

export default LargeCarousel
