import React from 'react'
import { scrollTo } from '../../../helpers'
import { Button } from '../../../UI'
import { CurriculumJumbo } from '../../../assets/svgImgs'
import Container from './styles'

const Jumbotron = () => {
  return (
    <Container>
      <div className="col--1">
        <h1 className="u--typo__title">
          Welcome to Ydev Academy,
          <br />
          <span className="outlined">course outlines.</span>
        </h1>
        <p>
          Our curriculum is designed to shape you to be the best you can be in
          your current role or any role you are seeking to transition to.
        </p>
        <Button
          onClick={() => {
            const scrollPosition = document.getElementById(
              'courseContainerPosition',
            )
              ? document.getElementById('courseContainerPosition').offsetTop -
                50
              : 0

            scrollTo(null, scrollPosition)
          }}
        >
          Go to Courses
        </Button>
      </div>
      <div className="col--2">
        <img src={CurriculumJumbo} alt={'Curiculum'} />
      </div>
    </Container>
  )
}

export default Jumbotron
