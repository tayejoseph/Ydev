import React from 'react'
import { v4 as uuid } from 'uuid'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { TitleWithDesign, HelpForm, LargeCarousel } from '../../component'
import { group } from '../../assets/png'
import { becomeAnInstructor } from '../../redux/actions'
import { becomeAnInstructorContent } from '../../constants'
import {
  Mentor,
  MentorStatus,
  DoubleChat,
  Picture,
} from '../../assets/convertedSvgs'
import { Button, Tabs, PalletOpen } from '../../UI'
import {
  ITwo,
  IThree,
  IFour,
  IFive,
  ISix,
  ISeven,
  ITen,
} from '../../assets/png/Instructors'
import { AppRoutes } from '../../constants'
import Container from './styles'

const carousel = [ITwo, IThree, IFour, IFive, ISix, ISeven, ITen]

const tabContent = [
  {
    title: 'Instructors',
    content: [
      {
        title: 'What does it take to be an instructor?',
        details:
          'Becoming an instructor with Ydev requires your expertise, dedication and will to impact knowledge to others.',
      },
      {
        title: 'Are there benefits to one becoming an instructor?',
        details:
          'Yes, there are. As an instructor, you get the opportunity to learn, earn and connect with other like-minded individuals. Our structure supports self-growth and we offer a rewarding compensation for your time and commitment being a part of our winning team.',
      },
      {
        title: 'Is this a full-time program?',
        details:
          'No, it’s not. As an instructor, you get to work with us based on upcoming projects/training.',
      },
      {
        title: 'Why should I join your team as an instructor?',
        details:
          'We are a team of young and motivated individuals with a clear vision of directly impacting the lives of tech enthusiasts across the country. Joining us will give you the opportunity to work with highly motivated individuals and you also get to enjoy continuous support from team members to ensure you rise to the peak of your career.',
      },
    ],
  },
]
const BecomeAMentor = () => {
  const { jobOpenings } = useSelector((state) => state.AppReducer)
  const history = useHistory()

  const scrollToForm = () => {
    const dom = document.getElementById('form')
    window.scrollTo({
      top: dom.offsetTop - 100,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      <section className="section--jumbotron">
        <div className="col--1">
          <h2>
            <Mentor />
            Become an instructor!
          </h2>
          <TitleWithDesign title="Transform the tech world with Ydev" />
          <p>
            Join our team and directly impact the lives of techies across the
            country.{' '}
          </p>
          <div className="action--group">
            <Button onClick={scrollToForm}>Apply now</Button>
            <Button
              tertiary
              onClick={() => {
                history.push(AppRoutes.aboutUs.faq)
              }}
            >
              Vist our FAQ
            </Button>
          </div>
        </div>
        <div className="col--2">
          <img src={group} alt="All mentors" />
        </div>
      </section>
      <section className="section--world">
        <h1>Our Misson</h1>
        <p>
          To help Africans reach their highest potential through a world class
          education.{' '}
        </p>
      </section>
      <section className="section--goodfit">
        <header>
          <h1>Why join Ydev Team?</h1>
          <p>
            Learn, earn and create impact as part of our small but growing team
          </p>
        </header>
        <div className="grid--container">
          {becomeAnInstructorContent.joinYdev.map((item) => (
            <div className="grid--item" key={uuid()}>
              <header>
                <h2>{item.title}</h2>
                <item.icon />
              </header>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section--whatFor">
        <header>
          <h1>Job Openings </h1>
          <p>Join our growing and amazing team</p>
        </header>
        <div className="content--container">
          {jobOpenings &&
            Object.keys(jobOpenings).map((item) => (
              <div key={uuid()} className="job--item">
                <p>
                  {jobOpenings[item].title}
                  <span>
                    {moment(jobOpenings[item].uploadAt)
                      .startOf('day')
                      .fromNow()}
                  </span>
                </p>
                <Button
                  plain
                  onClick={() => {
                    history.push(
                      `${AppRoutes.jobDetails}/${jobOpenings[item].id}`,
                    )
                  }}
                >
                  View opening
                </Button>
              </div>
            ))}
        </div>
      </section>

      <section className="section--join" id="form">
        <div className="col--1">
          <h1>Ready to join as an Instructor?</h1>
          <HelpForm api={becomeAnInstructor} />
        </div>
        <div className="col--2">
          <MentorStatus />
        </div>
      </section>
      <section className="section--wantInfo">
        <header className="component--header">
          <DoubleChat />
          <h1>Want more info?</h1>
          <p>
            Check out our <Link to={AppRoutes.faq}>Mentors FAQ page</Link>
          </p>
        </header>
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

export default BecomeAMentor
