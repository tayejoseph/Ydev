import React from 'react'
import { Link } from 'react-router-dom'
import { TitleWithDesign } from '../../component'
import { Transform } from '../../assets/svgImgs'
import { Tabs, Carousel, CarouselItem } from '../../UI'
import TabContent from './TabContent'
import { becomeAnInstructorContent, HomeContent } from '../../constants'
import { Mentor, DoubleChat, Picture } from '../../assets/convertedSvgs'
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
            Become an instructor!
          </h2>
          <TitleWithDesign title="Transform the tech world with Ydev" />
          <p>
            Join our team and directly impact the lives of techies across the
            country.{' '}
          </p>
          <div className="action--group">
            <Button>Apply now</Button>
            <Button tertiary>Vist our FAQ</Button>
          </div>
        </div>
        <div className="col--2">
          <img src={Transform} alt="All mentors" />
        </div>
      </section>
      <section className="section--world">
        <h1>Our Misson</h1>
        <p>
          Ydev is one of Africa’s leading online tech-education firms valued at
          over $10 million that aims to solve the tech talent gap worldwide
          through its market leading products. Since inception the entity has
          over 80,000 registered users and has facilitated 4590+ placements in
          over 500 companies. In the last 12 months alone, Ydev has placed more
          students in FAANG companies than all IITs combined.
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
            <div className="grid--item" key={item.key}>
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
            <div key={item.key} className="job--item">
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
        <header className="wantInfo--header">
          <DoubleChat />
          <h1>Want more info?</h1>
          <p>
            Check out our{' '}
            <Link to={`${AppRoutes.faq}?tab=instructors`}>
              Instructors FAQ page
            </Link>
          </p>
        </header>
        <Tabs
          title="Categories"
          tabs={[
            {
              title: 'Instructors',
              key: 'instructors',
              component: () => (
                <TabContent
                  {...{
                    content: HomeContent.frequentQuestions.instructors,
                  }}
                />
              ),
            },
          ]}
        />
      </section>
      <section className="section--picture">
        <header>
          <Picture />
          <h1>They say a picture is worth a thousand words</h1>
          <p>We captured a thousand pictures</p>
        </header>
        <Carousel carouselLists={becomeAnInstructorContent.carousel}>
          {({ activeIndex }) =>
            becomeAnInstructorContent.carousel.map((item, index) => (
              <CarouselItem {...{ index, activeIndex }}>
                <div className="carousel--img__container">
                  <img src={item} alt={'instructor'} />
                </div>
              </CarouselItem>
            ))
          }
        </Carousel>
      </section>
    </Container>
  )
}

export default BecomeAnInstructor
