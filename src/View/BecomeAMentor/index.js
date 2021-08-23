import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { HelpForm, TitleWithDesign } from '../../component'
import { AllMentors } from '../../assets/svgImgs'
import { becomeAMentorContent } from '../../constants'
import {
  Mentor,
  MentorStatus,
  DoubleChat,
  Picture,
} from '../../assets/convertedSvgs'
import { Button } from '../../UI'
import { AppRoutes } from '../../constants'
import Container from './styles'

const BecomeAnInstructor = () => {
  return (
    <Container>
      <section className="section--jumbotron">
        <div className="col--1">
          <h2>
            <Mentor />
            Become a mentor today!
          </h2>
          <TitleWithDesign title="Share your expertise, make a difference." />
          <p>
            This is your chance to give back to the community - mentor Ydev
            students to help them unlock their true potential.
          </p>
          <div className="action--group">
            <Button>Apply now</Button>
            <Button tertiary>Vist our FAQ</Button>
          </div>
        </div>
        <div className="col--2">
          <img src={AllMentors} alt="All mentors" />
        </div>
      </section>
      <section className="section--world">
        <div className="grid--container">
          <div className="grid--item">
            <p>
              8,000+ <br />
              registered mentees
              <br />
              worldwide
            </p>
          </div>
          <div className="grid--item">
            <p>
              500+
              <br />
              qualified mentors
            </p>
          </div>
          <div className="grid--item">
            <p>
              97%
              <br />
              successful mentorship
              <br />
              experiences
            </p>
          </div>
        </div>
      </section>
      <section className="section--goodfit">
        <header>
          <h1>Are you a good fit to be a mentor?</h1>
          <p>What it means to be a mentor at Ydev Academy</p>
        </header>
        <div className="grid--container">
          {becomeAMentorContent.goodFit.map((item) => (
            <div className="grid--item" key={uuid()}>
              <header>
                <h2>{item.title}</h2>
                <item.icon />
              </header>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
        <div className="btn--container">
          <Button>I’m ready to become a mentor</Button>
        </div>
      </section>
      <section className="section--whatFor">
        <div className="col--1">
          <h1>What’s in it for you? </h1>
          <p>
            Mentoring relationships are a shared opportunity for learning and
            growth. Many mentors say that the rewards they gain are as
            substantial as those for their mentees, and that mentoring has
            enabled them to:
          </p>
          <div className="action--container">
            <Button icon arial-label="previous">
              <IoIosArrowForward />
            </Button>
            <Button icon arial-label="next">
              <IoIosArrowBack />
            </Button>
          </div>
        </div>
        <div className="col--2"></div>
      </section>
      <section className="section--join">
        <div className="col--1">
          <h1>Ready to join as a Mentor?</h1>
          <HelpForm />
        </div>
        <div className="col--2">
          <MentorStatus />
        </div>
      </section>
      <section className="section--wantInfo">
        <header>
          <DoubleChat />
          <h1>Want more info?</h1>
          <p>
            Check out our <Link to={AppRoutes.faq}>Mentors FAQ page</Link>
          </p>
        </header>
      </section>
      <section className="section--picture">
        <header>
          <Picture />
          <h1>They say a picture is worth a thousand words</h1>
          <p>We captured a thousand pictures</p>
        </header>
      </section>
    </Container>
  )
}

export default BecomeAnInstructor
