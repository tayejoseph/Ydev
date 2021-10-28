import React from 'react'
import { Button } from '../../../UI'
import { Blogs } from '../../../assets/convertedSvgs'
import { HomeContent } from '../../../constants'
import Container from './styles'

const BlogsContent = () => {
  return (
    <Container>
      <header>
        <Blogs />
        <h1 className="u--typo__title2">Our blog and news</h1>
        <p>
          Stay up-to-date with the latest news and trendy information about our
          programs, alumni spotlights and information around the tech world
        </p>
      </header>
      <div className="grid--container">
        {HomeContent.blogs.map((item) => (
          <div className="grid--item">
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="img--container">
                <img src={item.imgAddress} alt={item.title} />
              </div>
              <div className="content--container">
                <h1>{item.title}</h1>
                <p>{item.details}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <footer>
        <Button secondary>Read more</Button>
      </footer>
    </Container>
  )
}

export default BlogsContent
