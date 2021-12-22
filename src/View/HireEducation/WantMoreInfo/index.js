import React from 'react'
import { DoubleChat } from '../../../assets/convertedSvgs'
import { Link } from 'react-router-dom'
import { Tabs, PalletOpen } from '../../../UI'
import { hireEdContent } from '../../../constants'
import Container from './styles'

const WantMoreInfo = () => {
  return (
    <Container>
      <header className="component--header">
        <DoubleChat />
        <h1 className="u--typo__title2">Want more info?</h1>
        <p>
          Check out our <Link to="/">Enterprise FAQ page</Link>
        </p>
      </header>
      <Tabs title="Category" tabs={hireEdContent.faq}>
        {(item) => {
          const { title, content } = item ? item : {}
          return content && content.map((item) => <PalletOpen {...item} />)
        }}
      </Tabs>
    </Container>
  )
}

export default WantMoreInfo
