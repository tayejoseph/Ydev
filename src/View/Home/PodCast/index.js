import React from 'react'
import { HomeContent } from '../../../constants'
import Container from './styles'

const PodCast = () => {
  return (
    <Container>
      <header>
        <h1 className="u--typo__title2">Connect with us</h1>
        <p>
          For the latest news and updates in Technology, Entertainment, and
          Lifestyle, stay connected to us on TechLifeCast via our various
          channels. Listen as we thrill you with information probing the ways
          technology impacts our lifestyle, and by extension what the future
          holds for us, our immediate community, and the world at large.{' '}
        </p>
      </header>
      <div className="grid--container">
        {HomeContent.podcastLists.map((item) => (
          <div className="podcast--item">
            <h3>{item.name}</h3>
            <p>
              <a href={item.link} rel="noreferrer" target="_blank">
                <img src={item.src} alt={item.name} />
              </a>
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default PodCast
