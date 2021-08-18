import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { TitleWithDesign } from '../../../component'
import Container from './styles'

const Jumbotron = () => {
  return (
    <Container>
      <TitleWithDesign title="Frequently Asked Questions" />
      <form>
        <button arial-lable="search">
          <FiSearch />
        </button>
        <input placeholder="what do you want to know?" />
      </form>
    </Container>
  )
}

export default Jumbotron
