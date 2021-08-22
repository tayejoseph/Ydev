import React from 'react'
import { TitleWithDesign } from '../../../../component'
import { StudentsStories } from '../../../../assets/svgImgs'
import Container from './styles'

const Jumbotron = () => {
  return (
    <Container>
      <div className="col--1">
        <h2>TESTIMONIALS</h2>
        <TitleWithDesign title="Student Stories" />
        <p>
          We know YDev is life-changing because we hear it from our students and
          alumni every day. Watch our alumni share their story on how YDev
          helped them start new careers in tech and get ready to rewrite your
          own story.{' '}
        </p>
      </div>
      <div className="col--2">
        <img src={StudentsStories} alt={'StudentsStories'} />
      </div>
    </Container>
  )
}

export default Jumbotron
