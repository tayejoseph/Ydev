import React, { useState, useEffect, useRef } from 'react'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import { Button } from '../../../UI'
import { HomeContent } from '../../../constants'
import Container from './styles'

const Immersive = () => {
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
      <div className="col--1">
        <h1>Ydev immersive Curriculum</h1>
        <p>
          Browse through a carefully created curriculum tailored specifically to
          your needs. Our curriculum meets global standards putting you in the
          top 1% in the tech space.
        </p>
        <Button className="curriculum--btn">View our curriculum</Button>
        <div className="action--container">
          <Button
            icon
            disabled={activeIndex === 0}
            onClick={() => {
              if (activeIndex > 0) setScroll(activeIndex - 1)
            }}
          >
            <IoIosArrowDropleftCircle />
          </Button>
          <Button
            icon
            disabled={activeIndex === HomeContent.schoolLists.length}
            onClick={() => {
              if (activeIndex < HomeContent.schoolLists.length)
                setScroll(activeIndex + 1)
            }}
          >
            <IoIosArrowDroprightCircle />
          </Button>
        </div>
      </div>

      <div className="col--2" ref={gridContainerRef}>
        {HomeContent.schoolLists.map((item, index) => (
          <div className={`pallet--item`} key={item.key} id={`pallet-${index}`}>
            <div
              className={`img--container ${item.title
                .replace(' ', '-')
                .toLowerCase()}`}
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
