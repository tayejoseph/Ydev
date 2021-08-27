import React from 'react'
import { aboutUsOurStoryContent } from '../../../constants'
import { CompanySponsors, ReadyStart } from '../../../component'
import { LinkedIn2 } from '../../../assets/convertedSvgs'
import { groupPhoto } from '../../../assets/svgImgs'
import Container from './styles'

const OurStory = () => {
  console.log('Sdkdkdskdslk')
  return (
    <Container>
      <section className="section--jumbotron">
        <hgroup>
          <h3>Our mission</h3>
          <h1>
            Unlocking potentials <br />
            <span>through world-class education</span>
          </h1>
        </hgroup>
      </section>
      <section className="section--mission">
        <hgroup>
          <h1>Our Misson</h1>
          <p>
            To help Africans reach their highest potential through a world class
            education.
          </p>
        </hgroup>
      </section>
      <section className="section--outStory">
        <h1>Our Story</h1>
        <p>
          Looking at how the world has rapidly changed, we realized that the
          traditional education in Africa is not enough to equip graduates for
          the opportunities of this new era. Today’s digital economy requires
          certain skill sets and combination of qualities; advanced technical
          skills, a high level of collaboration, and adaptability. This inspired
          the founding of Ydev Academy to address this disparity. Our mission is
          to equip our graduates with the necessary in demand and future skills
          to match the quality of talent in the global market. We aim to build a
          community of skilled problem solvers, creating solutions to Africa’s
          problems through technology. At Ydev Academy, we are committed to
          delivering quality education that transforms lives through in-depth
          curriculums, accelerated learning, communities, job placements, and
          mentorship; ensuring our students succeed in the path they have
          chosen. Technology is the solution to a better Africa. We intend to
          lead that change.
          <span className="u--color__primary">We're in this together</span>
        </p>
        <img src={groupPhoto} alt="we're in this together" />
      </section>
      <section className="section--values">
        <hgroup>
          <h1>Our Values</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
        </hgroup>
        <div className="grid--container">
          {aboutUsOurStoryContent.ourValues.map((item) => (
            <div className="grid--item" key={item.key}>
              <header>
                <h2>{item.title}</h2>
                <item.icon />
              </header>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section--sponsors">
        <h1>Some companies that have hired from Ydev academy</h1>
        <CompanySponsors />
      </section>
      <section className="section--executive">
        <h1>Meet our executive team</h1>
        <div className="grid--container">
          {aboutUsOurStoryContent.executives.map((item) => (
            <div className="grid--item" key={item.key}>
              <div className="img--container">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <h1>{item.name}</h1>
                <a href={item.linkedInLink}>
                  <LinkedIn2 />
                </a>
              </div>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section--executive">
        <h1>Meet our advisory board</h1>
        <div className="grid--container">
          {aboutUsOurStoryContent.adviseBoard.map((item) => (
            <div className="grid--item" key={item.key}>
              <div className="img--container">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <h1>{item.name}</h1>
                <a href={item.linkedInLink} target="_blank" rel="noreferrer">
                  <LinkedIn2 />
                </a>
              </div>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <ReadyStart {...{ content: 'Ready to learn with Ydev?' }} />
    </Container>
  )
}

export default OurStory
