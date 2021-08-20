import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { upcomingEventContent } from '../../../constants'
import Container from './styles'

const EventLists = () => {
  const [activeDisplay, setDisplay] = useState([])

  const handleToggle = (id) => {
    const exist = activeDisplay.find((item) => item === id)
    setDisplay((s) => (exist ? s.filter((item) => item !== id) : [...s, id]))
  }

  return (
    <Container>
      {upcomingEventContent.eventLists.map((item) => (
        <div
          className="event--item"
          key={item.id}
          onClick={() => handleToggle(item.id)}
        >
          <header role="button">
            <h3>{item.date}</h3>
            <div className="title--container">
              <h1>{item.title}</h1>
              {item.content && (
                <MdKeyboardArrowRight
                  className={activeDisplay.includes(item.id) ? 'active' : ''}
                />
              )}
            </div>
            <h3>Register</h3>
          </header>
          {activeDisplay.includes(item.id) && (
            <>
              {item.content && (
                <div
                  className={`content--container
                `}
                >
                  <p>{item.content.detail}</p>
                  {item.content.img && (
                    <img src={item.content.img} alt={item.title} />
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </Container>
  )
}

export default EventLists
