import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Tabs } from '../../../UI'
import TabContent from './TabContent'
import { HomeContent } from '../../../constants'
import { Questions, AppLogo } from '../../../assets/convertedSvgs'
import Container from './styles'

const FrequentQuestions = () => {
  const history = useHistory()
  return (
    <Container>
      <section className="section--questions">
        <header className="question--header">
          <Questions />
          <h1>Frequently asked questions</h1>
          <p>
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
                  {...{ content: HomeContent.frequentQuestions.students }}
                />
              ),
            },
            {
              title: 'Mentors',
              key: 'mentors',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.mentors }}
                />
              ),
            },
            {
              title: 'Instructors',
              key: 'instructors',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.instructors }}
                />
              ),
            },
            {
              title: 'Enterprise',
              key: 'enterprise',
              component: () => (
                <TabContent
                  {...{ content: HomeContent.frequentQuestions.enterprise }}
                />
              ),
            },
          ]}
        />
      </section>
      <section className="section--ready">
        <AppLogo />
        <h1>Ready to start?</h1>
        <Button onClick={() => history.push('?modal=apply')}>Apply now</Button>
      </section>
    </Container>
  )
}

export default FrequentQuestions
