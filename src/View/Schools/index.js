import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  CheckedStar,
  FullChecked,
  LearnMore,
  Form,
  Lego,
  Todo,
  CustomBox,
} from '../../assets/convertedSvgs'
import { TitleWithDesign } from '../../component'
import { Button, InputGroup } from '../../UI'
import { schoolsContent } from '../../constants'
import Container from './styles'

const School = () => {
  const { schoolName } = useParams()
  const {
    jumbotron,
    secondSection,
    thirdSection,
    fourthSection,
  } = schoolsContent[schoolName] ? schoolsContent[schoolName] : {}
  const [formData, setFormState] = useState({
    email: '',
    fullName: '',
  })

  const handleInput = ({ value, name }) => {
    setFormState((s) => ({
      ...s,
      [name]: value,
    }))
  }

  return (
    <Container>
      <section className="section--jumbotron">
        <div className="col--1">
          {/* <div className="illustration--container">
            <CustomBox />
          </div> */}
          <h1>{jumbotron?.title}</h1>
          <p>{jumbotron?.details}</p>
          <ol>
            {jumbotron?.lists &&
              jumbotron.lists.map((item) => (
                <li key={item.key}>
                  <FullChecked />
                  {item}
                </li>
              ))}
          </ol>
          <Button>Apply now</Button>
        </div>
        <div className="col--2">
          <CheckedStar />
        </div>
      </section>
      <section className="section--second">
        <div className="col--1">
          <TitleWithDesign title={secondSection?.title} />
          <div className="details--container">
            {secondSection?.details &&
              secondSection.details.map((item) => <p key={item.key}>{item}</p>)}
          </div>
        </div>
        <div className="col--2">
          <h1>{secondSection?.timeLine}</h1>
          <Button>Download curriculum</Button>
        </div>
      </section>
      <section className="section--third">
        <h1>{thirdSection?.title}</h1>
        <div className="lists--container">
          {thirdSection?.lists &&
            thirdSection.lists.map((item) => (
              <div className="list--item">
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            ))}
        </div>
      </section>
      <section className="section--forth">
        <hgroup>
          <h1>{fourthSection?.title}</h1>
          <p>{fourthSection?.detail}</p>
        </hgroup>
        <div className="hours--container">
          {fourthSection?.hours &&
            fourthSection.hours.map((item) => (
              <div className="hour--item" key={item.key}>
                <h2 dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
        </div>
        <div className="timeline--grid">
          {fourthSection?.timeLines &&
            fourthSection.timeLines.map((item) => (
              <div className="timeline--item">
                <h2>{item.time}</h2>
                <h3>{item.title}</h3>
                <ol>
                  {item.details.map((item) => (
                    <li>{item}</li>
                  ))}
                </ol>
              </div>
            ))}
        </div>
      </section>
      <section className="section--admission">
        <hgroup>
          <h1>Our admissions process</h1>
          <p>Start your journey with these steps</p>
        </hgroup>
        <div className="grid--container">
          <div className="grid--item">
            <header>
              <h1>01</h1>
              <Lego />
            </header>
            <h2>Complete Ydev Academy Foundations*</h2>
            <p>
              Take our 4-8 week design foundation course. *Skip this step if you
              have previous design experience.
            </p>
          </div>
          <div className="grid--item">
            <header>
              <h1>02</h1>
              <Form />
            </header>
            <h2>Submit application</h2>
            <p>
              Complete a simple 3-minute application linking to your design work
              to see if it meets the admissions criteria.
            </p>
          </div>
          <div className="grid--item">
            <header>
              <h1>03</h1>
              <Todo />
            </header>
            <h2>Secure Financing and Begin Ydev Academy</h2>
            <p>
              Choose a payment method, create your profile, and enroll in the
              next UX Academy cohort!
            </p>
          </div>
        </div>
      </section>
      <section className="section--learnMore">
        <div className="col--1">
          <h1>
            Learn more about our design course and how to take your first step!
          </h1>
          <form>
            <InputGroup
              hasRequired={true}
              required
              value={formData.fullName}
              onChange={handleInput}
              label="Full Name"
            />
            <InputGroup
              hasRequired={true}
              required
              value={formData.email}
              onChange={handleInput}
              label="Email"
              type="email"
            />
            <footer>
              <p>
                By selecting this, you agree to Ydev <Link to="/">Terms</Link>{' '}
                and <Link to="/">Privacy Policy</Link>
              </p>
              <div className="action--container">
                <Button>Apply now</Button>
                <Button secondary>Download syllabus</Button>
              </div>
            </footer>
          </form>
        </div>
        <div className="col--2">
          <LearnMore />
        </div>
      </section>
    </Container>
  )
}

export default School
