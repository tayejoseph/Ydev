import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useQuery } from '../../hooks'
import Container from './styles'

const Tabs = ({ tabs, title, content, width, theme }) => {
  const query = useQuery().get('tab')
  const { url } = useRouteMatch()

  const activeTab = tabs && tabs.find((item) => item.title === query)
  console.log(activeTab, 'activeTab')
  return (
    <Container width={width} className="tab--ui">
      <nav>
        {title && <h3 className="nav--title">{title}</h3>}
        {tabs &&
          tabs.map((item) => (
            <div key={`tabLink--${item.title}`} className="tab--item">
              <Link
                to={`${url}?tab=${item.key || item.title}`}
                className={query === item.title ? 'active' : null}
              >
                {item.title}
              </Link>
            </div>
          ))}
      </nav>
      {/* {activeTab && <div className="tab--content">{activeTab.content}</div>} */}
    </Container>
  )
}

export default Tabs
