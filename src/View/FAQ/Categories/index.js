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
          {
            title: 'Corporate training',
            key: 'training',
            component: () => (
              <TabContent
                {...{ content: HomeContent.frequentQuestions.training }}
              />
            ),
          },
        ]}
      />
    </Container>
  )
}

export default Categories
