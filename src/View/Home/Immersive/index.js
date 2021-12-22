import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Button } from '../../../UI'
import { carouselContent, AppRoutes } from '../../../constants'
import Container from './styles'

const Immersive = () => {
  const history = useHistory()
  const activeRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCarouselNavigation = (direction) => {
    if (direction === 'next' && activeIndex < carouselContent.length) {
      setActiveIndex(activeIndex + 1)
    } else if (direction === 'previous' && activeIndex !== 0) {
      setActiveIndex(activeIndex - 1)
    }
    if (activeRef.current) {
      document.getElementById('carousel--container').scrollTo({
        left: activeRef.current.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Container>
      <div className="col--1">
        <h1>Ydev immersive Curriculum</h1>
        <p>
          Browse through a carefully created curriculum tailored specifically to
          your needs. Our curriculum meets global standards putting you in the
          top 1% in the tech space.
        </p>
        <Button onClick={() => history.push(AppRoutes.curriculum)}>
          View our curriculum
        </Button>
        <div className="action--container">
          <button
            arial-label="go back"
            onClick={() => handleCarouselNavigation('previous')}
            disabled={activeIndex === 0}
          >
            <IoIosArrowBack />
          </button>
          <button
            arial-label="go forward"
            onClick={() => handleCarouselNavigation('next')}
            disabled={activeIndex === carouselContent.length}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="col--2" id="carousel--container">
        {carouselContent.map((item, index) => (
          <div
            className="carousel--item"
            key={item.title}
            ref={index === activeIndex ? activeRef : null}
          >
            <div
              className="img--container"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="content--container">
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Immersive
