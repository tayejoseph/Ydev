import React from 'react'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'
import { Button } from '../../../UI'
import { CompanyHire } from '../../../component'
import { aluminiContent } from '../../../constants'
import Container from './styles'

const Hire = () => {
  const history = useHistory()
  return (
    <Container>
      <section className="section--skills">
        <header>
          <h1 className="u--typo__title2">Hire for the skills you need</h1>
          <p>
            Find qualified talents that meet the needs of your team and company.
          </p>
        </header>
        <div className="grid--container">
          {aluminiContent.skills.map((item) => (
            <div className="grid--item" key={uuid()}>
              <div className="img--container">
                <img src={item.img} alt={item.title} />
              </div>
              <h1>{item.title}</h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section--process">
        <h1 className="u--typo__title2">Our hiring Process</h1>
        <p>Your journey to finding the best talents start here</p>
        <Button onClick={() => history.push('?popup=hire')}>
          Start Hiring
        </Button>
      </section>
      <section className="section--hireProcess">
        {aluminiContent.hiringProcess.map((item) => (
          <div className="grid--item">
            <header>
              <hgroup>
                <h1>{item.no}</h1>
                <div className="img--container">
                  <item.img />
                </div>
              </hgroup>
              <h1 className="hire--title">{item.title}</h1>
            </header>
            <p>{item.details}</p>
          </div>
        ))}
      </section>
      <section className="section--company">
        <CompanyHire
          title="Some companies that have hired/trained from Ydev Academy
"
        />
      </section>
      <section className="section--hiring">
        <header>
          <h1 className="u--typo__title2">
            What hiring managers say about Ydev alumni
          </h1>
          <p>
            The truth speaks volumes. Hear what hiring managers are saying about
            our talents
          </p>
        </header>
        <div className="grid--container">
          {aluminiContent.recommendation.map((item) => (
            <div className="grid--item">
              <div>
                <div className="img--container">
                  <img src={item.img} alt={item.name} />
                </div>
                <p>{item.detail}</p>
              </div>
              <div>
                <h3>{item.name}</h3>
                <span className="svg--container">
                  <item.company />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Hire
