import React from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../hooks'
import Container from './styles'

const Tabs = ({ tabs, title }) => {
  const history = useHistory()
  const query = useQuery().get('tab')
  return (
    <Container className="tab--ui">
      <nav>
        {title && <h3 className="title--txt">{title}</h3>}
        <div className="navigation--container">
          {tabs.map((item, index) => (
            <button
              key={item.key}
              className={
                query === item.key || (!query && index === 0)
                  ? 'active--tab'
                  : null
              }
              onClick={() => history.push(`?tab=${item.key}`)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>
      <div className="tab--content">
        {!query && <div>{tabs[0].component && tabs[0].component()}</div>}
        {tabs.map((item) =>
          query === item.key ? (
            <div key={item.key}>{item.component ? item.component() : null}</div>
          ) : null,
        )}
      </div>
    </Container>
  )
}
export default Tabs
