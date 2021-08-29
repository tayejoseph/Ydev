import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Button } from '../../UI'
import Container, { CarouselItemContainer } from './styles'

export const Carousel = ({ carouselLists = [], children }) => {
  const gridContainerRef = useRef(null)
  const [activeIndex, setScroll] = useState(0)

  useEffect(() => {
    const pallet = document.getElementById(`pallet-${activeIndex}`)
    if (pallet) {
      gridContainerRef.current.scrollTo({
        left: activeIndex === 0 ? 0 : pallet.offsetLeft,
        behavior: 'smooth',
      })
    }
  }, [activeIndex])

  return (
    <Container>
      <div className="carousel--action__container">
        <Button
          className="left--btn"
          arial-label="previous"
          icon
          disabled={activeIndex === 0}
          onClick={() => {
            if (activeIndex > 0) setScroll(activeIndex - 1)
          }}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          icon
          className="right--btn"
          arial-label="next"
          disabled={activeIndex === carouselLists.length}
          onClick={() => {
            if (activeIndex + 1 < carouselLists.length)
              setScroll(activeIndex + 1)
          }}
        >
          <IoIosArrowForward />
        </Button>
      </div>
      <div
        className="carousel--grid__container"
        ref={gridContainerRef}
        onScroll={(e) => {
          e.preventDefault()
          console.log('sdkjkdsjk')
        }}
      >
        {children({ activeIndex })}
      </div>
    </Container>
  )
}

export const CarouselItem = ({ activeIndex, index, children, gutterSize }) => {
  return (
    <CarouselItemContainer
      gutterSize={'4em'}
      className={`carousel--item pallet-${index} ${
        activeIndex === index ? 'active--section' : ''
      }`}
      id={`pallet-${index}`}
    >
      {children}
    </CarouselItemContainer>
  )
}
