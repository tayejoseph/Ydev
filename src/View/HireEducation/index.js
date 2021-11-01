import React from 'react'
import { Switch } from 'antd'
import { Link } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import Immersive from './Immersive'
import {
  Handshake2,
  MoneyBag,
  Rocket2,
  Eye2,
  Man,
} from '../../assets/convertedSvgs'
import { Parteners } from '../../component'
import { Capman } from '../../assets/convertedSvgs'
import { Barchart, PaperPen, Lists } from '../../assets/convertedSvgs'

import Container from './styles'

const palletLists = [
  {
    title: 'World-Class Curriculum',
    details:
      'Begin with a solid foundation. The Ydev curriculum is carefully curated to maximze impact',
    icon: Handshake2,
  },
  {
    title: 'Alumni Support',
    details:
      'Ydev goes above and beyond. Students will be assimilated into our Alumni Program, where thousands of professionals with real-world experiences will be there to guide them',
    icon: MoneyBag,
  },
  {
    title: 'Industry experts',
    details:
      'Students will be trained by industry experts; They will learn innovative solutions to complex problems, sharpen their thirst for knowledge and increase their job-market value',
    icon: Rocket2,
  },
  {
    title: 'Mentorship',
    details:
      'Students will be matched with mentors whose careers align with their desires. By shadowing these mentors, they can see first hand what their path will look like and learn the soft skills needed to apply what knowledge they have acquired',
    icon: Eye2,
  },
]
const HireEducation = () => {
  return (
    <Container>
      <section className="section--jumbotron">
        <hgroup>
          <h3>
            <Capman />
            Learn. Grow. Explore.
          </h3>
          <h1>Education should be better aligned with outcomes</h1>
          <p>
            We partner with the world’s leading institutions to help companies
            bridge the skills gap by preparing, placing, and supporting people
            into life-changing careers{' '}
          </p>
          <Button>Schedule consultation</Button>
        </hgroup>
      </section>
      <section className="section--partner">
        <header>
          <h1 className="u--typo__title2">
            Why Partner With{' '}
            <span className="u--color__primary">Ydev Academy?</span>
          </h1>
          <p>
            Transforming higher education isn’t something we can do alone. To
            move education into the digital age, we blend a purpose-driven goal
            with a student-focused culture at Ydev. This is why we collaborate
            glocal-ly with strategic partners and collaborators who share our
            mission and are dedicated to changing lives through the use of
            education technology.{' '}
          </p>
        </header>
        <div className="grid--container">
          {palletLists.map((item) => (
            <div className="grid--item">
              <div className="top--container">
                <h1>{item.title}</h1>
                <item.icon />
              </div>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section--admission">
        <header>
          <h1 className="u--typo__title2">Some more amazing benefits</h1>
        </header>
        <div className="grid--container">
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>01</h1>
                <Barchart />
              </div>
              <h1 className="title">Our commitment</h1>
            </hgroup>
            <p>
              We are dedicated to transforming lives; equipping learners to
              reach their full potential.
            </p>
          </div>
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>02</h1>
                <PaperPen />
              </div>
              <h1 className="title">Good track record</h1>
            </hgroup>
            <p>
              Our work speaks volumes across different universities both home
              and abroad equipping students with relevant in-demand tech skills.
            </p>
          </div>
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>03</h1>
                <Lists />
              </div>
              <h1 className="title">Extensive placement</h1>
            </hgroup>
            <p>
              Partnering with us avails your students internship opportunities
              while in school and job placements upon graduation.
            </p>
          </div>

          <div className="grid--item">
            <hgroup>
              <div>
                <h1>04</h1>
                <Barchart />
              </div>
              <h1 className="title">Cost effective</h1>
            </hgroup>
            <p>Our programs are affordable and designed to suit your needs.</p>
          </div>
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>05</h1>
                <PaperPen />
              </div>
              <h1 className="title">Expertise</h1>
            </hgroup>
            <p>
              We have the right team to prepare your students for the future
              workforce.
            </p>
          </div>
          <div className="grid--item">
            <hgroup>
              <div>
                <h1>06</h1>
                <Lists />
              </div>
              <h1 className="title">Continuous support</h1>
            </hgroup>
            <p>
              Even after the end of a program, we are always available to
              provide support for you and your students.
            </p>
          </div>
        </div>
      </section>

      <Immersive />

      <Parteners
        title="Some of Our Partners"
        details="We understand the importance of service year to serve and prepare for an amazing career ahead. We have partnered with local, global companies to help train and place  corp members"
      />

      <section className="section--universities">
        <div className="col--1">
          <h1 className="u--typo__title2">Become a Higher Education Partner</h1>
          <form>
            <InputGroup hasRequired label="Full Name" />
            <InputGroup hasRequired label="Email" type="email" />
            <InputGroup hasRequired label="Higher education name" />
            <InputGroup hasRequired label="Higher education Url" type="url" />
            <InputGroup hasRequired label="Your Role" />
            <InputGroup hasRequired label="Phone Number" type="tel" />
            <InputGroup
              hasRequired
              label="How can we help you?"
              type="textarea"
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
          <Man />
        </div>
      </section>
    </Container>
  )
}

export default HireEducation
