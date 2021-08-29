import React from 'react'
import { Blogs } from '../../../assets/convertedSvgs'
import { HomeContent } from '../../../constants'
import { AppInfo } from '../../../constants'
import Container from './styles'

const BlogsContent = () => {
  return (
    <Container>
      <header>
        <Blogs />
        <h1>Our blog and news</h1>
        <p>
          Stay up-to-date with the latest news and trendy information about our
          programs, alumni spotlights and information around the tech world
        </p>
      </header>
      <div className="grid--container">
        {HomeContent.blogs.map((item) => (
          <div className="grid--item" key={item.key}>
            <img src={item.img} alt={item.title} />
            <div className="content--container">
              <h1>{item.title}</h1>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <a href={AppInfo.mediumLink} target="_blank" rel="noreferrer">
          Read more
        </a>
      </footer>
    </Container>
  )
}

export default BlogsContent
