import React from 'react'
import Jumbotron from './Jumbotron'
import CurriculumLists from './CurriculumLists'
import { ReachUs } from '../../component'
import Container from './styles'

const Curriculum = () => {
  return (
    <Container>
      <Jumbotron />
      <CurriculumLists />
      <ReachUs withBackDrop={true} />
    </Container>
  )
}

export default Curriculum
