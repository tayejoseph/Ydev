import React from 'react'
import { v4 as uuid } from 'uuid'
import { HomeContent } from '../../../constants'
import { Button } from '../../../UI'
import { BeginFoundation } from '../../../assets/svgImgs'
import Container from './styles'

const Foundation = () => {
  return (
    <Container>
      <section className="section--top">
        <div className="col--1">
          <img src={BeginFoundation} alt="Begin with a foundation" />
        </div>
        <div className="col--2">
          <h1 className="u--typo__title2">Begin with a Solid foundation</h1>
          <p>
            Enjoy a great and rewarding tech career with us, as our programs are
            designed to equip you with a solid foundation to fast track your
            growth in the tech space. Let us guide you step-by-step through
            relevant in-demand tech skills as you gain hands-on experience
            through our robust curriculum.
          </p>
          <Button>Explore our curriculum</Button>
        </div>
      </section>
      <section className="section--bottom">
        <header>
          <h1 className="u--typo__title2">Our students are hired by</h1>
          <p>Global relevance and opportunities for all</p>
        </header>
        <div className="grid--container">
          {HomeContent.parteners.map((item) => (
            <div key={uuid()}>{item}</div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Foundation
