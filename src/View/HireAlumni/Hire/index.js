import React from 'react'
import { v4 as uuid } from 'uuid'
import { Button } from '../../../UI'
import { aluminiContent } from '../../../constants'
import Container from './styles'

const Hire = () => {
  return (
    <Container>
      <section className="section--skills">
        <header>
          <h1>Hire for the skills you need</h1>
          <p>
            Find qualified talents that meet the needs of your team and company.
          </p>
        </header>
        <div className="grid--container">
          {aluminiContent.skills.map((item) => (
            <div className="grid--item" key={uuid()}>
              <img src={item.img} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section--process">
        <h1>Our hiring Process</h1>
        <p>Your journey to finding the best talents start here</p>
        <Button>Start Hiring</Button>
      </section>
      <section className="section--hireProcess">
        {aluminiContent.hiringProcess.map((item) => (
          <div className="grid--item">
            <header>
              <hgroup>
                <h1>{item.no}</h1>
                <item.img />
              </hgroup>
              <h1 className="hire--title">{item.title}</h1>
            </header>
            <p>{item.details}</p>
          </div>
        ))}
      </section>
      <section className="section--company">
        <h1>Some companies that have hired from Ydev academy</h1>
        <div className="grid--container"></div>
      </section>
      <section className="section--hiring">
        <header>
          <h1>What hiring managers say about Ydev alumni</h1>
          <p>
            The truth speaks volumes. Hear what hiring managers are saying about
            our talents
          </p>
        </header>
        <div className="grid--container">
          {aluminiContent.recommendation.map((item) => (
            <div className="grid--item">
              <div className="img--container">
                <img src={item.img} alt={item.name} />
              </div>
              <p>{item.detail}</p>
              <h3>{item.name}</h3>
              <span className="svg--container">
                <item.company />
              </span>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Hire
