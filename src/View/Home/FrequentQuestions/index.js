import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Tabs } from '../../../UI'
import TabContent from './TabContent'
import { HomeContent } from '../../../constants'
import { Questions, AppLogo, HandPanBlack } from '../../../assets/convertedSvgs'
import Container from './styles'

const FrequentQuestions = () => {
  return (
    <Container>
      <section className="section--questions">
        <header className="question--header">
          <Questions />
          <h1>Frequently asked questions</h1>
          <p>
            <HandPanBlack />
            <Link to="/">Know more</Link> about our programs
          </p>
        </header>
        <Tabs
          title="Categories"
          tabs={[
            {
              title: 'All questions',
              key: 'question',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.question }}
                />
              ),
            },
            {
              title: 'Students',
              key: 'students',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.question }}
                />
              ),
            },
            {
              title: 'Mentors',
              key: 'mentors',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.question }}
                />
              ),
            },
            {
              title: 'Instructors',
              key: 'instructors',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.question }}
                />
              ),
            },
            {
              title: 'Enterprise',
              key: 'enterprise',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.question }}
                />
              ),
            },
          ]}
        />
      </section>
      <section className="section--ready">
        <AppLogo />
        <h1>Ready to start?</h1>
        <Button>Apply now</Button>
      </section>
    </Container>
  )
}

export default FrequentQuestions
