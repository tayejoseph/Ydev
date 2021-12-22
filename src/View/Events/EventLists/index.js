import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Container from './styles'

const EventLists = () => {
  const { events } = useSelector((state) => state.AppReducer)
  const [activeDisplay, setDisplay] = useState([])

  const handleToggle = (id) => {
    const exist = activeDisplay.find((item) => item === id)
    setDisplay((s) => (exist ? s.filter((item) => item !== id) : [...s, id]))
  }

  return (
    <Container>
      {events
        ? Object.keys(events).map((key) => (
            <div
              className="event--item"
              key={events[key].id}
              onClick={() => handleToggle(events[key].id)}
            >
              <header role="button">
                <h3>{moment(events[key].event_date).format('MMM Do YY')}</h3>
                <div className="title--container">
                  <h1>{events[key].name}</h1>
                  {events[key].details && (
                    <MdKeyboardArrowRight
                      className={
                        activeDisplay.includes(events[key].id) ? 'active' : ''
                      }
                    />
                  )}
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  <a href={events[key].url} target="_blank" rel="noreferrer">
                    Register
                  </a>
                </div>
              </header>
              {activeDisplay.includes(events[key].id) && (
                <>
                  {events[key].details && (
                    <div
                      className={`content--container
                `}
                    >
                      <p>{events[key].details}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        : ''}
    </Container>
  )
}

export default EventLists
