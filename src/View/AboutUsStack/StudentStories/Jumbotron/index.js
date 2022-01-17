import React from 'react'
import { TitleWithDesign } from '../../../../component'
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
        <iframe
          title="testimonal"
          src="https://drive.google.com/file/d/1UJ_AEo3w0qV_xzzHJm150B_ls787qQ3G/preview"
          width="550rem"
          height="320rem"
          allow="autoplay"
        ></iframe>
      </div>
    </Container>
  )
}

export default Jumbotron
