import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { TitleWithDesign } from '../../../component'
import { Button } from '../../../UI'
import { curriculumContent } from '../../../constants'
import Container from './styles'

const CurriculumLists = () => {
  return (
    <Container>
      <header className="title--header">
        <TitleWithDesign title="All available courses" />
      </header>
      {curriculumContent.allCourses.map((item, index) => (
        <section className={`section--${index + 1}`} key={item.key}>
          <div className="col--1">
            <header>
              <h1>{item.no}</h1>
              <div>
                <h2>{item.title}</h2>
                <Button plain>
                  View courses
                  <RiArrowDropRightLine />
                </Button>
              </div>
            </header>
            <p>{item.detail}</p>
            <img src={item.img} alt={item.title} />
          </div>
          <div className="col--2">
            {item.curicula.map((item) => (
              <div key={item.key}>
                <h1>{item.no}</h1>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Container>
  )
}

export default CurriculumLists
