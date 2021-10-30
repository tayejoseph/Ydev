import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Switch } from 'antd'
import { TitleWithDesign } from '../../component'
import { SchoolsLists } from '../../constants'
import {
  ReadingGuy,
  Barchart,
  PaperPen,
  Checked,
  StarChecked,
  Lists,
} from '../../assets/convertedSvgs'
import { Button, InputGroup } from '../../UI'
import Container from './styles'

const School = () => {
  const {
    params: { schoolName },
  } = useRouteMatch()
  console.log(useRouteMatch(), 'Mathc')
  const {
    jumbotron,
    secondContent,
    thirdContent,
    fourthContent,
  } = SchoolsLists[schoolName]
  return (
    <Container>
      <section className="section--jumbotron">
        <div className="col--1">
          <h1>{jumbotron.title}</h1>
          <p>{jumbotron.details}</p>
          <ol>
            {jumbotron.lists.map((item) => (
              <li key={item}>
                <Checked />
                {item}
              </li>
            ))}
          </ol>
          <Button>Apply now</Button>
        </div>
        <div className="col--2">
          <StarChecked />
        </div>
      </section>
      <section className="section--timeline">
        <div className="col--1">
          <TitleWithDesign title={secondContent.title} />
          <div className="detail--container">{secondContent.details}</div>
        </div>
        <div className="col--2">
          <h1>{secondContent.timeLine}</h1>
          <Button>Download Curriculum</Button>
        </div>
      </section>
      <section className="section--why">
        <h1 className="u--typo__title2">{thirdContent.title}</h1>
        {thirdContent.details.map((item) => (
          <div className="detail--item">
            <h2>{item.title}</h2>
            <p>{item.details}</p>
          </div>
        ))}
      </section>
      <section className="section--training">
        <header className="training--header">
          <h1 className="u--typo__title2">{fourthContent.title}</h1>
          <p>{fourthContent.description}</p>
          <Button>Download Full Curriculum</Button>
        </header>
        <div className="lists--container">
          {fourthContent.details.map((item) => (
            <div className="list--item">
              <header>
                <h2>{item.title}</h2>
                <h2>{item.details}</h2>
              </header>
              <ol>
                {item.lists.map((list) => (
                  <li key={list}>
                    <span>📌</span> {list}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
      <section className="section--admission">
        <header>
          <h1 className="u--typo__title2">Our admissions process</h1>
          <p>Start your journey with these steps</p>
        </header>
        <div className="grid--container">
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>01</h1>
                <Barchart />
              </div>
              <h1 className="title">Sign Up</h1>
            </hgroup>
            <p>Select your desired course, fill our form and get registered</p>
          </div>
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>02</h1>
                <PaperPen />
              </div>
              <h1 className="title">Make payment</h1>
            </hgroup>
            <p>
              Complete payment to confirm your registration status for the
              cohort.
            </p>
          </div>
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>03</h1>
                <Lists />
              </div>
              <h1 className="title">Start learning</h1>
            </hgroup>
            <p>
              Get added to our slack channel, receive our course curriculum,
              timetable and start learning.
            </p>
          </div>
        </div>
      </section>

      <section className="section--learnMore">
        <div className="col--1">
          <h1>
            Learn more about our {jumbotron.title.toLowerCase()} and how to take
            your first step!
          </h1>
          <form>
            <InputGroup label="Full Name" required hasRequired={true} />
            <InputGroup
              label="Email"
              type="email"
              required
              hasRequired={true}
            />
            <footer>
              <div className="footer--row">
                <Switch defaultChecked onChange={console.log} />
                <p>
                  By selecting this, you agree to Ydev <Link to="">Terms</Link>{' '}
                  and <Link to="">Privacy Policy</Link>
                </p>
              </div>
              <div className="action--container">
                <Button>Apply Now</Button>
                <Button secondary>Download Syllabus</Button>
              </div>
            </footer>
          </form>
        </div>
        <div className="col--2">
          <ReadingGuy />
        </div>
      </section>
    </Container>
  )
}

export default School
