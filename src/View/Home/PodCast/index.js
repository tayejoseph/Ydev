import React from 'react'
import { Button } from '../../../UI'
import { Blogs } from '../../../assets/convertedSvgs'
import { HomeContent } from '../../../constants'
import Container from './styles'

const PodCast = () => {
  return (
    <Container>
      <header>
        <h1 className="u--typo__title2">Listen to our podcast</h1>
        <p>
          If you like to explore and enjoy podcasts that cover the intersection
          between Technology, Entertainment, and Lifestyle, TechLifeCast is the
          channel for you. Listen as we thrill you with information probing the
          ways technology impacts our lifestyle, and by extension what the
          future holds for us, our immediate community, and the world at large.{' '}
        </p>
      </header>
      <div className="grid--container">
        {HomeContent.podcastLists.map((item) => (
          <div className="podcast--item">
            <h3>{item.name}</h3>
            <p>
              <a href={item.link} rel="noreferrer" target="_blank">
                List to Podcast
              </a>
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default PodCast
