import React, { useState, useRef } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { HomeContent } from '../../../constants'
import { Union, LoveCode } from '../../../assets/convertedSvgs'
import Container from './styles'

const palletLists = [
  '250+ \n employed',
  '485+ \n learning hours',
  '290+ \n alumni',
  '7+ \n in-demand \n certifications',
  '3620+ \n student trained',
  '11+ \n countries presence',
  '50+ \n onsite tech training',
]
const TestimonalImpact = () => {
  const activeRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCarouselNavigation = (direction) => {
    if (direction === 'next' && activeIndex < HomeContent.testimonials.length) {
      setActiveIndex(activeIndex + 1)
    } else if (direction === 'previous' && activeIndex !== 0) {
      setActiveIndex(activeIndex - 1)
    }
    if (activeRef.current) {
      document.getElementById('test--container').scrollTo({
        left: activeRef.current.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Container>
      <section className="section--testimonials">
        <header>
          <LoveCode />
          <h1 className="u--typo__title2">Testimonials</h1>
          <p>
            Our platform continues to make a positive impact on lives and
            changes stories for good
          </p>
        </header>
        <div className="action--container">
          <button
            arial-label="previous"
            className="action--btn action--left"
            onClick={() => handleCarouselNavigation('previous')}
            disabled={activeIndex === 0}
          >
            <IoIosArrowBack style={{ transform: 'rotate(180deg)' }} />
          </button>

          <button
            arial-label="previous"
            onClick={() => handleCarouselNavigation('next')}
            className="action--btn action--right"
            disabled={activeIndex === HomeContent.testimonials.length}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <div className="testimonial--container" id="test--container">
          {HomeContent.testimonials.map((item, index) => (
            <div
              className="test--item"
              key={item.title}
              ref={index === activeIndex ? activeRef : null}
            >
              <div>
                <div className="img--container">
                  <img src={item.img} alt={item.title} />
                </div>
                <p className="text-description">{item.details}</p>
              </div>
              <footer>
                <h3>{item.name}</h3>
                <div className="logo--container">{item.logo}</div>
              </footer>
            </div>
          ))}
        </div>
      </section>
      <section className="section--impacts">
        <header>
          <Union />
          <h1 className="u--typo__title2">Our impact stories</h1>
          <p>
            Our schools are never closed... and learning never ends Here is how
            far we have covered
          </p>
        </header>
        <div className="pallet--container">
          {palletLists.map((item) => (
            <div className="pallet--item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default TestimonalImpact
