import React, { useState } from 'react'
import Container from './styles'

const Tabs = ({ tabs, title, content, width, theme, children }) => {
  const [activeItem, setActiveItem] = useState(tabs[0].title)
  const activeTab = tabs && tabs.find((item) => item.title === activeItem)

  return (
    <Container width={width} className="tab--ui">
      <nav className="tab--nav">
        {title && <h3 className="nav--title">{title}</h3>}
        <div className="nav--lists">
          {tabs &&
            tabs.map((item) => (
              <div key={`tabLink--${item.title}`} className="tab--item">
                <button
                  className={item.title === activeItem ? 'active' : ''}
                  onClick={() => setActiveItem(item.title)}
                >
                  {item.title}
                </button>
              </div>
            ))}
        </div>
      </nav>
      <div className="tab--content">{children && children(activeTab)}</div>
    </Container>
  )
}

export default Tabs
