import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../../UI'
import { AppRoutes } from '../../../constants'
import { BeginFoundation } from '../../../assets/svgImgs'
import Container from './styles'

const Foundation = () => {
  const history = useHistory()
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
          <Button onClick={() => history.push(AppRoutes.curriculum)}>
            Explore our curriculum
          </Button>
        </div>
      </section>
    </Container>
  )
}

export default Foundation
