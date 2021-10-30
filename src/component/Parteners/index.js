import React from 'react'
import { v4 as uuid } from 'uuid'
import {
  MongoDb,
  Microsoft,
  Ibm,
  Google,
  Segment,
  Linux,
  Amazon,
  SaleForce,
  Docker,
  CircleCi,
  DigitalOcean,
  GitHub,
  Figma,
  Tableau,
  Oracle,
  RedHat,
} from '../../assets/convertedSvgs'
import Container from './styles'

const hires = [
  {
    logo: Microsoft,
    link: 'https://azureforeducation.microsoft.com/en-us/Student',
  },
  {
    logo: Ibm,
    link: 'https://www.ibm.com/in-en/marketing/careereducation/index.html',
  },
  { logo: MongoDb, link: 'https://university.mongodb.com/certification' },
  { logo: Google, link: 'https://www.echovc.com/' },
  { logo: Segment, link: 'https://segment.com/industry/startups/' },
  {
    logo: Linux,
    link:
      'https://training.linuxfoundation.org/about/academic-partner-program/',
  },
  { logo: Amazon, link: 'https://aws.amazon.com/education/awseducate/' },
  { logo: SaleForce, link: 'https://trailhead.salesforce.com/en' },
  {
    logo: Docker,
    link:
      'https://www.docker.com/blog/docker-higher-education-tools-resources-teachers/',
  },
  {
    logo: CircleCi,
    link:
      'https://circleci.com/blog/announcing-our-new-learning-platform-circleci-academy/',
  },
  { logo: DigitalOcean, link: 'https://www.imaadedu.com/' },
  { logo: GitHub, link: 'https://education.github.com/' },
  { logo: Figma, link: 'https://www.figma.com/education/' },
  { logo: Tableau, link: 'https://www.tableau.com/community/academic' },
  {
    logo: RedHat,
    link: 'https://www.redhat.com/en/services/training/red-hat-academy',
  },
  {
    logo: Oracle,
    link: 'https://www.redhat.com/en/services/training/red-hat-academy',
  },
]

const Partners = ({ title, details }) => {
  return (
    <Container>
      <header>
        <h1 className="u--typo__title2">{title || 'Our Partners'}</h1>
        <p>{details || 'Global relevance and opportunities for all'}</p>
      </header>
      <div className="grid--container">
        {hires.map((item) => (
          <div key={uuid()}>
            <a href={item.link} target="__blank">
              <item.logo />
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Partners
