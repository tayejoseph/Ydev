import React from 'react'
import { DoubleChat } from '../../../assets/convertedSvgs'
import { Link } from 'react-router-dom'
import { Tabs, PalletOpen } from '../../../UI'
import Container from './styles'

const tabContent = [
  {
    title: 'Enterprise',
    content: [
      {
        title: 'How long does it take to match the right talent to a firm?',
        details: '',
      },
      {
        title:
          'What makes your talents any different from other software developers out there?',
        details:
          'Our talents have gone through an intensive 6-month full-time program where they have gained mastery in their individual area of expertise. Also, many of them have gained internship opportunities with top firms where they have acquired real-life applications.',
      },
      {
        title:
          'If I don’t want to hire new talents, can you train my existing staff to be skilled?',
        details: '',
      },
    ],
  },
]

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
      <Tabs title="Category" tabs={tabContent}>
        {(item) => {
          const { content } = item ? item : {}
          return content && content.map((item) => <PalletOpen {...item} />)
        }}
      </Tabs>
    </Container>
  )
}

export default WantMoreInfo
