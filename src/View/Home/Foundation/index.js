import React from 'react'
import { Button } from '../../../UI'
import { TitleWithDesign, CompanySponsors } from '../../../component'
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
          <TitleWithDesign title="Begin with a Solid foundation" />
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
          <h1 className="u--typo__title2">Our Partners</h1>
          <p>Global relevance and opportunities for all</p>
        </header>
        <CompanySponsors />
      </section>
    </Container>
  )
}

export default Foundation
