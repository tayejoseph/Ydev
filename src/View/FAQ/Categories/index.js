import React from 'react'
import { Tabs } from '../../../UI'
import TabContent from './TabContent'
import { HomeContent } from '../../../constants'
import Container from './styles'

const Categories = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Categories
