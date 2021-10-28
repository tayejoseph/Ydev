import React from 'react'
import { Button } from '../../../UI'
import { Bulb } from '../../../assets/convertedSvgs'
import { homeJumbotron } from '../../../assets/svgImgs'
import { TitleWithDesign } from '../../../component'
import Container from './styles'

const Jumbotron = () => {
  return (
    <Container>
      <div className="col--1">
        <p>
          <Bulb />
          Start to success
        </p>
        <TitleWithDesign
          title="Your journey to a great tech career starts here
      "
        />
        <p>
          Our robust curriculum and immersive classes equip students with the
          relevant skills needed to launch a successful career
        </p>
        <div className="action--group">
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="col--2">
        <img src={homeJumbotron} alt="Your Journey" />
      </div>
    </Container>
  )
}

export default Jumbotron
