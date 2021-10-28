import React from 'react'
import { Tabs } from '../../../../UI'
import TabContent from '../TabContent'
import Container from './styles'

const { TabPane } = Tabs

const OurStories = () => {
  return (
    <Container>
      <h1>Our Student Stories</h1>
      <div className="tab--container">
        {/* <Tabs>
          {[
            'All grads',
            'Product Design',
            'Data management',
            'Product management',
            'DevOps',
            'Software Engineering',
          ].map((item) => (
            <TabPane tab={item} key={item}>
              <TabContent />
            </TabPane>
          ))}
        </Tabs> */}
      </div>
    </Container>
  )
}

export default OurStories
