import React from 'react'
import { Tabs } from '../../../../UI'
import {
  Anthony,
  Adegbite,
  Chika2,
  Popoola,
  Ifechukwu2,
  Opeyemi2,
  Ifeanyi2,
  Thompson,
  Bashirat,
} from '../../../../assets/png'
import TabContent from '../TabContent'
import Container from './styles'

const { TabPane } = Tabs

const tabContent = [
  {
    title: 'All graduates',
    content: [
      {
        name: 'Anthony Umeh',
        role: 'Banker',
        img: Anthony,
        details:
          'I went to Ydev not knowing anything about data science and programming but with a lot of interest in the topic. It was a worthy journey, I returned to my job with so much data and programming skills that I started automating my tasks to the surprise of colleagues.',
      },
      {
        name: 'Debo Adegbite',
        img: Adegbite,
        role: 'Data Analyst/ Refine Operations Specialist',
        details: (
          <>
            From the Masterclass into the Main bowl, the instructors with apt
            knowledge of what to do delivered with cutting-edge training skills
            and the environment is a sure atmosphere to upload.
            <br />
            <br />
            Meeting other professionals from diverse fields also enhanced my
            learning pace. The Forums, discussions, Assignment all combine. It's
            been a WOW experience.
            <br />
            <br />I can't wait to enrol for the advanced stage.
          </>
        ),
      },
      {
        name: 'Chika Ezedunukwe',
        img: Chika2,
        role: 'Research Analyst',
        details:
          'YDev has amazing instructors who take their time to drive home each curriculum. There are always follow up projects to test your understanding and capabilities of the curriculum taught.  I can certainly boast that my objectives were met and goals achieved.',
      },
      {
        name: 'Damilola Popoola',
        img: Popoola,
        role: 'Business Development Specialist',
        details:
          "I did not think I could ever understand any programming language and I was wondering what I was getting myself into. The ydev instructors made it easy for me to get through the course and I'm happy I made the decision to transition.",
      },
      {
        name: 'Ifechukwu Obiaku',
        img: Ifechukwu2,
        role: 'Data Analyst',
        details:
          'Learning in Ydev was easy, they made learning fun and I always looked forward to the next class. When the cohort was over they were still willing to provide assistance and that was really great.',
      },
      {
        name: 'Opeyemi Ogundeyi',
        img: Opeyemi2,
        role: 'Product Manager',
        details:
          'It was a wonderful experience. Very attentive instructor. It was like I had a personal teacher despite being a remote.',
      },
      {
        name: 'Ifeanyi Nwadugbo',
        img: Ifeanyi2,
        role: 'Student',
        details:
          "Going into Ydev, I was a bit unsure of what I wanted to be honest. I knew I needed to add an extra skill to augment my course of study, Electronics and electrical engineering. However, on going on through with the Ydev course, this new skill opened my eyes to new niches that I wasn't aware existed, even with my course of study. Finishing the Ydev course, I've found myself on this new path with various new possibilities. Totally recommend.",
      },
      {
        name: 'Dami Thompson',
        img: Thompson,
        role: 'VP',
        details:
          'YDev provided a solid foundation for me to understand the basics about data science. It also grew my curiosity about the applicability of data to my work and the various ways to which I could use and apply those learnings in different scenarios. The tutors were also very patient and understanding and will work with you based on your level of understanding. I would absolutely recommend YDev to any one who wants to learn, grow or develop a path in data science.',
      },
      {
        name: 'Bashirat Adeyanju',
        img: Bashirat,
        role: 'Health Educator',
        details:
          'Ydev Academy is a great institution when it comes to data analysis, data science and management. The tutors are so good and are ready to teach you .The classes are always very interesting and interactive. I learnt so much, even more than expected because at the end of the program, I was able to analyze data using various software such as Excel, Power BI and even programming languages such as R and python. Ydev Academy is the best for anyone who wants to be a great data scientist or analyst',
      },
    ],
  },
  {
    title: 'Product Design',
    content: [],
  },
  {
    title: 'Data Management',
    content: [],
  },
  {
    title: 'Product Management',
    content: [],
  },
  {
    title: 'DevOps',
    content: [],
  },
  {
    title: 'Software Engineering',
    content: [],
  },
]

const OurStories = () => {
  return (
    <Container>
      <header className="stories--header">
        <h1>Our Student Stories</h1>
        <h2>2019 - 2020</h2>
      </header>
      <div className="tab--container">
        <Tabs title="Categories" tabs={tabContent}>
          {({ content }) => (
            <div className="grid--container">
              {content.map((item) => (
                <div className="profile--item" key={item.name}>
                  <img src={item.img} alt={item.name} />
                  <header>
                    <h2>{item.name}</h2>
                    <h3>{item.role}</h3>
                  </header>
                  <p className="detail">{item.details}</p>
                </div>
              ))}
            </div>
          )}
        </Tabs>
      </div>
    </Container>
  )
}

export default OurStories
