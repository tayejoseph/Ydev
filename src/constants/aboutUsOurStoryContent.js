import { v4 as uuid } from 'uuid'
import {
  Microsoft,
  Ibm,
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
  GraduationCap,
  Grow,
  Globe,
  Target,
} from '../assets/convertedSvgs'
import {
  Bernard,
  Wilson,
  Tomi,
  Debo,
  Adeola,
  Jeff,
  Adebosayo,
  Kiwako,
} from '../assets/svgImgs'

const aboutUsOurStoryContent = {
  ourValues: [
    {
      title: 'Learn',
      key: uuid(),
      details:
        'Intentional about enhanced learning providing tailored education that suits the learning preference of our target audience.',
      icon: GraduationCap,
    },
    {
      title: 'Grow',
      key: uuid(),
      details:
        'A culture that encourages continuous support for our students and alumni providing them with an enabling environment to support their growth.',
      icon: Grow,
    },
    {
      title: 'Explore',
      key: uuid(),
      details:
        'The opportunity to connect with global opportunities across the world.',
      icon: Globe,
    },
    {
      title: 'Practice',
      key: uuid(),
      details:
        'Providing multiple platforms that support talents in self-development and mastery.',
      icon: Target,
    },
  ],
  parteners: [
    <Microsoft />,
    <Ibm />,
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
  executives: [
    {
      name: "Bernard O'bien",
      linkedInLink: 'https://www.linkedin.com/in/bernard-e-o-bien-247564172/',
      key: uuid(),
      image: Bernard,
      details:
        'Bernard is a technology engineer who is passionate about education and the Sustainable Development Goals. He has a decade of experience in financial services, financial technology, telecommunications, SMEs and start-ups, to name a few.',
    },
    {
      name: 'Wilson Diamond',
      key: uuid(),
      image: Wilson,
      linkedInLink: 'https://www.linkedin.com/in/wilson-diamond-01b39324/',
      details:
        'Wilson Diamond is the cofounder of YCreators.com, a start-up that equips young children between the ages of 7 - 15 with life skills through coding, virtual reality, the Internet of Things and other STEM-related skills.',
    },
    {
      name: 'Tomi Jaiyeola',
      key: uuid(),
      image: Tomi,
      linkedInLink: 'https://www.linkedin.com/in/tomijaiyeola/',
      details:
        'Tomi is an international development specialist with radical project management experience in Eastern and Western Africa, leading education, technology and economic initiatives',
    },
    {
      name: 'Debo Odunlami',
      key: uuid(),
      image: Debo,
      linkedInLink: 'https://www.linkedin.com/in/debodunlami/',
      details:
        'Debo Odunlami is a young leader that sees education as a practical tool for personal, social and global transformation, with technology serving as a catalyst. He is actively involved in providing learning opportunities to youths in underserved communities.',
    },
    {
      name: 'Adeola Haruna',
      key: uuid(),
      image: Adeola,
      linkedInLink: 'https://www.linkedin.com/in/adeola-haruna-24490434/',
      details:
        'Adeola Haruna is the program director and cofounder of GirlCode Academy. She also works full-time at Onepipe.io as a Product Manager where she supports cutting-edge payment solutions. She is a strong believer in personal growth, independence and innovation.',
    },
    {
      name: 'Adebosayo Jackson',
      key: uuid(),
      image: Adebosayo,
      linkedInLink:
        'https://www.linkedin.com/in/adebosayojackson/?originalSubdomain=ng',
      details:
        'Adebosayo is a tech enthusiast with a keen interest in organizational effectiveness. She is the Chief Operating Officer for Harbor Inc. where she oversees the organization’s procedures and maintains control of diverse business operations.',
    },
  ],
  adviseBoard: [
    {
      name: 'Kiwako Sakamoto',
      key: uuid(),
      image: Kiwako,
      linkedInLink: 'https://www.linkedin.com/in/kiwakosakamoto/',
      details:
        "Kiwako Sakamoto is a Data Scientist, she served on the Big Data and Analytics Team with the World Bank's Innovation Labs, providing technical support to big data projects across various operations areas such as Energy, Transportation, and regional strategy in fragile states.",
    },
    {
      name: 'Jeff Katz',
      key: uuid(),
      image: Jeff,
      linkedInLink: 'linkedin.com/in/adebosayojackson/?originalSubdomain=ng',
      details:
        "Jeff Katz is the founder of Jigsaw Labs, a data engineering and machine learning school. He has taught and developed data science and web development curricula. He's taught over 350 students to code, with some of them going on to work for Microsoft, LinkedIn, and BlackRock.",
    },
  ],
}

export default aboutUsOurStoryContent
