import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { v4 as uuid } from 'uuid'
import { Link, useHistory } from 'react-router-dom'
import { HelpForm, TitleWithDesign, LargeCarousel } from '../../component'
import { GroupBenald } from '../../assets/png'
import { becomeAMentorContent } from '../../constants'
import {
  Mentor,
  MentorStatus,
  DoubleChat,
  Picture,
} from '../../assets/convertedSvgs'
import {
  MOne,
  MTwo,
  MThree,
  MFour,
  MFive,
  MSix,
  MSeven,
  MTen,
} from '../../assets/png/Mentors'
import { Button, Tabs, PalletOpen } from '../../UI'
import { AppRoutes } from '../../constants'
import Container from './styles'

const carousel = [MOne, MTwo, MThree, MFour, MFive, MSix, MSeven, MTen]

const tabContent = [
  {
    title: 'Mentors',
    content: [
      {
        title: 'How does it work?',
        details:
          'Our mentorship program is designed to allow you to share your experience and guide mentees in advancing their career. Based on the expertise and interest, you will be matched with a mentee for a certain period of time.',
      },
      {
        title: 'How much time does it take?',
        details:
          'This is usually dependent on you. With a flexible structure, we allow you to decide the number of minutes per day and hours per week you will like to commit to.',
      },
      {
        title: 'Is this a full-time program?',
        details:
          'No, it’s not. The mentorship program allows you to be able to work with a flexible structure that fits your calendar and schedule.',
      },
      {
        title: 'What do I need to qualify as a mentor?',
        details:
          'To be a mentor, you must possess transferable skills, expertise and a strong track record in any tech-related field.',
      },
    ],
  },
]
const BecomeAnInstructor = () => {
  const history = useHistory()

  const scrollToForm = () => {
    const dom = document.getElementById('form')
    window.scrollTo({
      top: dom.offsetTop - 180,
      behavior: 'smooth',
    })
  }

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
            <Button onClick={scrollToForm}>Apply now</Button>
            <Button
              tertiary
              onClick={() => history.push(AppRoutes.aboutUs.faq)}
            >
              Vist our FAQ
            </Button>
          </div>
        </div>
        <div className="col--2">
          <img src={GroupBenald} alt="All mentors" />
        </div>
      </section>
      <section className="section--world">
        <div className="grid--container">
          <div className="grid--item">
            <p>
              500+ <br />
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
          <Button onClick={scrollToForm}>I’m ready to become a mentor</Button>
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
      <section className="section--join" id="form">
        <div className="col--1">
          <h1>Ready to join as a Mentor?</h1>
          <HelpForm />
        </div>
        <div className="col--2">
          <MentorStatus />
        </div>
      </section>
      <section className="section--wantInfo">
        <header className="want--header">
          <DoubleChat />
          <h1>Want more info?</h1>
          <p>
            Check out our <Link to={AppRoutes.faq}>Mentors FAQ page</Link>
          </p>
        </header>{' '}
        <Tabs title="Categories" tabs={tabContent}>
          {({ content }) => content.map((item) => <PalletOpen {...item} />)}
        </Tabs>
      </section>
      <section className="section--picture">
        <header>
          <Picture />
          <h1>They say a picture is worth a thousand words</h1>
          <p>We captured a thousand pictures</p>
        </header>
        <LargeCarousel carousel={carousel} />
      </section>
    </Container>
  )
}

export default BecomeAnInstructor
