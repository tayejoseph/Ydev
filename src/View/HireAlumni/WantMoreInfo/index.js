import React from 'react'
import { Tabs } from '../../../UI'
import { DoubleChat } from '../../../assets/convertedSvgs'
import { Link } from 'react-router-dom'
import { HireAlumniContent } from '../../../constants'
import TabContent from './TabContent'
import Container from './styles'

const WantMoreInfo = () => {
  return (
    <Container>
      <header className="wantmore--header">
        <DoubleChat />
        <h1>Want more info?</h1>
        <p>
          Check out our <Link to="/">Enterprise FAQ page</Link>
        </p>
      </header>
      <div className="info--tab__container">
        <Tabs
          title="Categories"
          tabs={[
            {
              title: 'Enterprise',
              key: 'enterprise',
              component: () => (
                <TabContent {...{ content: HireAlumniContent.TabContent }} />
              ),
            },
          ]}
        />
      </div>
    </Container>
  )
}

export default WantMoreInfo
