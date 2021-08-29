import React, { useEffect, useState, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Button } from '../../../UI'
import { HomeContent } from '../../../constants'
import { Union, LoveCode } from '../../../assets/convertedSvgs'
import Container from './styles'

const TestimonalImpact = () => {
  const gridContainerRef = useRef(null)
  const [activeIndex, setScroll] = useState(0)

  useEffect(() => {
    const pallet = document.getElementById(`pallet-${activeIndex}`)
    if (pallet)
      gridContainerRef.current.scrollTo({
        left: pallet.offsetLeft,
        behavior: 'smooth',
      })
  }, [activeIndex])

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
            disabled={activeIndex === HomeContent.schoolLists.length}
            onClick={() => {
              if (activeIndex < HomeContent.schoolLists.length)
                setScroll(activeIndex + 1)
            }}
          >
            <IoIosArrowForward />
          </Button>
        </div>
        <div className="grid--container">
          <div className="grid--container" ref={gridContainerRef}>
            {HomeContent.testimonals.map((item, index) => (
              <div className={`grid--item pallet-${index}`}>
                <div className="img--container">
                  <img src={item.image} alt={item.name} />
                </div>
                <p>{item.detail}</p>
                <h3>{item.name}</h3>
                {item.company}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section--impacts">
        <header>
          <Union />
          <h1>Our impact stories</h1>
          <p>
            Our schools are never closed... and learning never ends Here is how
            far we have covered
          </p>
        </header>
        <div className="grid--container">
          <div className="grid--item">
            <h2>
              1,200+
              <br />
              learning hours
            </h2>
          </div>
          <div className="grid--item">
            <h2>
              500+
              <br />
              alumnis
            </h2>
          </div>
          <div className="grid--item">
            <h2>
              10+
              <br />
              in-demand
              <br />
              certifications
            </h2>
          </div>
          <div className="grid--item span--item">
            <h2>
              <strong>500+</strong>
              <br />
              employed
            </h2>
          </div>
          <div className="grid--item">
            <h2>
              500+
              <br />
              alumnis
            </h2>
          </div>
          <div className="grid--item">
            <h2>
              11+
              <br />
              countries presence
            </h2>
          </div>
          <div className="grid--item">
            <h2>
              50+
              <br />
              onsite tech training
            </h2>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default TestimonalImpact
