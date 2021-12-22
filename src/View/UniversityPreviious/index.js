import React from 'react'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { TitleWithDesign } from '../../component'
import { becomeAnInstructorContent } from '../../constants'
import {
  Mentor,
  Curriculums,
  Wallet,
  Rocket,
  Group,
  Flags,
  DoubleChat,
  Picture,
} from '../../assets/convertedSvgs'
import { learnToGrow } from '../../assets/png'
import { carouselContent } from '../../constants'
import { Button } from '../../UI'
import { AppRoutes } from '../../constants'
import Container from './styles'

const universityCurriculum = [
  {
    title: 'Robust curriculum',
    icon: <Curriculums />,
    details:
      'Students that go through our curriculum are guaranteed to learn with a robust curriculum that is world standard. Our curriculum guarantees that all of our students are prepared and capable of championing their own niche in the tech world.',
  },
  {
    title: 'Extensive Placement',
    icon: <Wallet />,
    details:
      'Our structure goes beyond equipping students with competitive in-demand tech skills; we go above and beyond to provide placements where our students can intern and gain hands-on experience with top firms both locally and internationally.',
  },
  {
    title: 'Customized Curriculum',
    icon: <Rocket />,
    details:
      'Students that go through our curriculum are guaranteed to learn with a robust curriculum that is world standard. Our curriculum guarantees that all of our students are prepared and capable of championing their own niche in the tech world.',
  },
  {
    title: 'Industry Experts',
    icon: <Group />,
    details:
      'Our faculty consists of industry professionals with extensive knowledge and experience in a variety of fields. We also leverage existing partnerships and relationships with OEMs and other international partners to link our students with the top trainers and facilitators.',
  },
  {
    title: 'Alumni support',
    icon: <Flags />,
    details:
      'We continue to help our graduates after they have completed a program or course, connecting them to opportunities and ensuring they have all the resources they need to build a successful tech career.',
  },
]

const University = () => {
  return (
    <Container>
      <section className="section--jumbotron">
        <div className="col--1">
          <h2>
            <Mentor />
            Learn. Grow. Explore.
          </h2>
          <TitleWithDesign title="Avant-garde Solutions for Universities" />
          <p>
            Ydev provides the best market-driven tech curriculum that’s
            effective, affordable, and scalable.We deliver customized
            market-driven tech curriculum that’s affordable, effective, and
            scalable.
          </p>
          <div className="action--group">
            <Button>Request Info</Button>
          </div>
        </div>
        <div className="col--2">
          <img src={learnToGrow} alt="All mentors" />
        </div>
      </section>
      <section className="section--world">
        <header>
          <h1>
            Why Partner With{' '}
            <span className="u--color__primary">Ydev Academy</span>
          </h1>
          <p>
            Successful partnerships rest on a foundation of quality,
            transparency, communication, and trust. Universities trust Ydev
            Academy because we share these values and have a commitment to
            “Students First” in everything we do.
          </p>
        </header>
        <div className="grid--container">
          {universityCurriculum.map((item) => (
            <div className="grid--item">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
        <Button>Request Info</Button>
      </section>
      <section className="section--program">
        <div className="col--1">
          <h1>Our Current Programs</h1>
          <p>
            Keep your institution relevant and leverage the high-demand
            curriculums of technology at a fraction of the cost. Offer your
            incumbents the coursework and skills needed for the future
            workforce. Create a new program offering in months, not years.
          </p>
          <Button>Explore Programs</Button>
        </div>
        <div className="col--2">
          {carouselContent.map((item) => (
            <div className="carousel--item" key={item.title}>
              <div
                className="img--container"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="content--container">
                <h2>{item.title}</h2>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
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
          {becomeAnInstructorContent.jobItems.map((item) => (
            <div key={uuid()} className="job--item">
              <p>
                {item.title}
                <span>{item.time}</span>
              </p>
              <Button plain>View opening</Button>
            </div>
          ))}
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

export default University
