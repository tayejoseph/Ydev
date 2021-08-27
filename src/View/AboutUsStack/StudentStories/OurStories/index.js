import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Tabs } from '../../../../UI'
import TabContent from './TabContent'
import { aboutUsContent } from '../../../../constants'
import Container from './styles'

const OurStories = () => {
  const [activeYear, setActiveYear] = useState('2019 - 2020')
  const [showMenu, setDisplay] = useState(false)

  const handleSetActiveYear = (activeYear) => {
    setActiveYear(activeYear)
    setDisplay(false)
  }

  useEffect(() => {
    const handleClickEvent = () => {
      setDisplay(false)
    }
    document.addEventListener('click', handleClickEvent)
    return () => {
      document.removeEventListener('click', handleClickEvent)
    }
  }, [])

  return (
    <Container>
      <header>
        <h1>Our Student Stories</h1>
        <div className={`menu--container ${showMenu ? 'active--nav' : ''}`}>
          <button
            className="menu--item"
            data-menu={'programs'}
            onClick={() => setDisplay(!showMenu)}
          >
            {activeYear}
            <span>
              <MdKeyboardArrowDown />
            </span>
          </button>
          <div className="menu--lists">
            <button onClick={() => handleSetActiveYear('2019 - 2020')}>
              2019 - 2020
            </button>
            <button onClick={() => handleSetActiveYear('2020 - 2021')}>
              2020 - 2021
            </button>
          </div>
        </div>
      </header>
      <div className="tab--container">
        <Tabs
          title="Categories"
          tabs={[
            {
              title: 'All graduates',
              key: 'graduates',
              component: () => (
                <TabContent
                  {...{
                    content: aboutUsContent.studentStories.allGrads,
                  }}
                />
              ),
            },
            {
              title: 'Product Design',
              key: 'design',
              component: () => (
                <TabContent
                  {...{
                    content: aboutUsContent.studentStories.allGrads,
                  }}
                />
              ),
            },
            {
              title: 'Data management',
              key: 'management',
              component: () => (
                <TabContent
                  {...{
                    content: aboutUsContent.studentStories.allGrads,
                  }}
                />
              ),
            },
            {
              title: 'Product management',
              key: 'productManagement',
              component: () => (
                <TabContent
                  {...{
                    content: aboutUsContent.studentStories.allGrads,
                  }}
                />
              ),
            },
            {
              title: 'DevOps',
              key: 'devOps',
              component: () => (
                <TabContent
                  {...{
                    content: aboutUsContent.studentStories.allGrads,
                  }}
                />
              ),
            },
            {
              title: 'Software Engineering',
              key: 'engineering',
              component: () => (
                <TabContent
                  {...{
                    content: aboutUsContent.studentStories.allGrads,
                  }}
                />
              ),
            },
          ]}
        />
      </div>
    </Container>
  )
}

export default OurStories
