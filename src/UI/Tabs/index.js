import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useQuery } from '../../hooks'
import Container from './styles'

const Tabs = ({ tabs, content, width, theme }) => {
  const query = useQuery().get('tab')
  const { url } = useRouteMatch()

  const activeTab = tabs.findIndex((item) => item.title === query)
  return (
    <Container width={width} className="tab--ui">
      <div className="tab--header">
        <nav>
          {tabs &&
            tabs.map((item) => (
              <div key={`tabLink--${item}`} className="tab--item">
                <Link
                  to={`${url}?tab=${item.key}`}
                  className={query === item.key ? 'active' : null}
                >
                  {item.title}
                </Link>
              </div>
            ))}
        </nav>
      </div>
      {activeTab && <div className="tab--content">{activeTab.content}</div>}
    </Container>
  )
}

export default Tabs
