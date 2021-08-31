import {
  MongoDb,
  Google,
  Segment,
  Linux,
  Amazon,
  SaleForce,
  Docker,
  CircleCi,
  DigitalOcean,
  GitHub,
  ZenithBank,
  UniversityOfLagos,
} from '../assets/convertedSvgs'
import { v4 as uuid } from 'uuid'
import {
  Anthonia,
  Olufade,
  Chika,
  Increase,
  Imasuen,
  madio,
} from '../assets/svgImgs'

const aboutUsContent = {
  parteners: [
    <ZenithBank />,
    <UniversityOfLagos />,
    <MongoDb />,
    <Google />,
    <Segment />,
    <Linux />,
    <Amazon />,
    <SaleForce />,
    <Docker />,
    <CircleCi />,
    <DigitalOcean />,
    <GitHub />,
  ],
  studentStories: {
    allGrads: [
      {
        name: 'Anthonia Umeh',
        profession: 'Banker',
        key: uuid(),
        img: Anthonia,
        details:
          'I went to Ydev not knowing anything about data science and programming but with a lot of interest in the topic. It was a worthy journey, I returned to my job with so much data and programming skills that I started automating my tasks to the surprise of colleagues.',
      },
      {
        name: 'Debo Adegbite',
        profession: 'Data Analyst/ Refine Operations Specialist',
        img: Olufade,
        key: uuid(),
        details: (
          <>
            <p>
              From the Masterclass into the Main bowl, the instructors with apt
              knowledge of what to do delivered with cutting-edge training
              skills and the environment is a sure atmosphere to upload.
              <br />
              <br />
              Meeting other professionals from diverse fields also enhanced my
              learning pace. The Forums, discussions, Assignment all combine.
              It's been a WOW experience.
              <br />
              <br />I can't wait to enrol for the advanced stage.
            </p>
          </>
        ),
      },
      {
        name: 'Olufade Obaloluwa Oluwatimilehin',
        profession: 'Accountant',
        img: Chika,
        key: uuid(),
        details:
          'I came to the YDEV to make a career transition to data analyst. Instructors are very knowledgeable. The curriculum is awesome. students can learn a lot if they spend a lot of time.',
      },
      {
        name: 'Chika Ezedunukwe',
        profession: 'Research Analyst',
        key: uuid(),
        img: Increase,
        details:
          'YDev has amazing instructors who take their time to drive home each curriculum. There are always follow up projects to test your understanding and capabilities of the curriculum taught.  I can certainly boast that my objectives were met and goals achieved.',
      },
      {
        name: 'Sinmi George',
        profession: 'Student',
        key: uuid(),
        img: Imasuen,
        details:
          'Ydev has shown me the part to AI and also given me the tools and environment needed to have a successful career.',
      },
      {
        name: 'Damilola Popoola',
        profession: 'Business Development Specialist',
        img: madio,
        key: uuid(),
        details:
          "I did not think I could ever understand any programming language  and I was wondering what I was getting myself into. The ydev instructors made it easy for me to get through the course and I'm happy I made the decision to transition.",
      },
      {
        name: 'Ifechukwu Obiaku',
        profession: 'Data Analyst',
        img: madio,
        key: uuid(),
        details:
          'Learning in Ydev was easy, they made learning fun and I always looked forward to the next class. When the cohort was over they were still willing to provide assistance and that was really great. ',
      },
      {
        name: 'Opeyemi Ogundeyi',
        profession: 'Product Manager',
        img: madio,
        key: uuid(),
        details:
          'It was a wonderful experience. Very attentive instructor. It was like I had a personal teacher despite being a remote.',
      },
      {
        name: 'Ifeanyi Nwadugbo',
        profession: 'Student',
        img: madio,
        key: uuid(),
        details:
          "Going into Ydev, I was a bit unsure of what I wanted to be honest. I knew I needed to add an extra skill to augment my course of study, Electronics and electrical engineering. However, on going on through with the Ydev course, this new skill opened my eyes to new niches that I wasn't aware existed, even with my course of study. Finishing the Ydev course, I've found myself on this new path with various new possibilities. Totally recommend.",
      },
      {
        name: 'Dami Thompson',
        profession: 'VP',
        img: madio,
        key: uuid(),
        details:
          'YDev provided a solid foundation for me to understand the basics about data science. It also grew my curiosity about the applicability of data to my work and the various ways to which I could use and apply those learnings in different scenarios. The tutors were also very patient and understanding and will work with you based on your level of understanding. I would absolutely recommend YDev to any one who wants to learn, grow or develop a path in data science.',
      },
      {
        name: 'Bashirat Adeyanju ',
        profession: 'Health Educator',
        img: madio,
        key: uuid(),
        details:
          'Ydev Academy is a great institution when it comes to data analysis, data science and management. The tutors are so good and are ready to teach you .The classes are always very interesting and interactive. I learnt so much, even more than expected because at the end of the program, I was able to analyze data using various software such as Excel, Power BI and even programming languages such as R and python. Ydev Academy is the best for anyone who wants to be a great data scientist or analyst',
      },
    ],
  },
}

export default aboutUsContent
