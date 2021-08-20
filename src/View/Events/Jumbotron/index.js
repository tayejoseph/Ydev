import React from 'react'
import { Calender } from '../../../assets/convertedSvgs'
import { TitleWithDesign } from '../../../component'
import Container from './styles'

const Jumbtron = () => {
  return (
    <Container>
      <div className="col--1">
        <TitleWithDesign title="Upcoming events" />
        <p>
          Learn more about our upcoming events, immersive programs and
          opportunities. Get insights into life at Ydev Academy and register for
          our upcoming events.
        </p>
      </div>
      <div className="col--2">
        <Calender />
      </div>
    </Container>
  )
}

export default Jumbtron
