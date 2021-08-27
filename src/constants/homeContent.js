import { v4 as uuid } from 'uuid'
import {
  Microsoft,
  Ibm,
  MongoDb,
  Google,
  Segment,
  Linux,
  Amazon,
  Curriculum,
  Payment,
  Support,
  Experts,
  SaleForce,
  Docker,
  CircleCi,
  DigitalOcean,
  Blocks,
  Brain,
  Friends,
  ScreenTime,
  GitHub,
  EcoVc,
  OneHealth,
  Leave,
} from '../assets/convertedSvgs'
import {
  wireframing,
  designThinking,
  functionalDesign,
  EngineeringSchool2,
  QASchool2,
  SoftWareEngineering,
  ProductManagement,
  ProductSchool2,
  DevOps,
  DesignSchool2,
  DataSchool,
  Dami,
  Chika2,
  Ifechukwu,
} from '../assets/svgImgs'

const HomeContent = {
  exclusives: [
    {
      title: 'Robust curriculum',
      icon: <Curriculum />,
      key: uuid(),
      details:
        'Students that go through our curriculum are guaranteed to learn with a robust curriculum that is world standard. Our curriculum guarantees that all of our students are prepared and capable of championing their own niche in the tech world',
    },
    {
      title: 'Extensive placement',
      key: uuid(),
      icon: <Payment />,
      details:
        'Our structure goes beyond equipping students with competitive in-demand tech skills; we go above and beyond to provide placements where our students can intern and gain hands-on experience with top firms both locally and internationally.',
    },
    {
      title: 'Alumni support',
      icon: <Support />,
      key: uuid(),
      details:
        'We continue to help our graduates after they have completed a program or course, connecting them to opportunities and ensuring they have all the resources they need to build a successful tech career.',
    },
    {
      title: 'Industry experts',
      icon: <Experts />,
      key: uuid(),
      details:
        'Our faculty consists of industry professionals with extensive knowledge and experience in a variety of fields. We also leverage existing partnerships and relationships with OEMs and other international partners to link our students with the top trainers and facilitators.',
    },
  ],
  schoolLists: [
    {
      title: 'Software School',
      img: SoftWareEngineering,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future coding challenges you'll be tasked with.",
    },
    {
      title: 'Data School',
      img: DataSchool,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
    {
      title: 'Design School',
      img: DesignSchool2,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
    {
      title: 'Product School',
      img: ProductSchool2,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
    {
      title: 'DevOps School',
      key: uuid(),
      img: DevOps,
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
    {
      title: 'Product Management',
      img: ProductManagement,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
    {
      title: 'QA School',
      img: QASchool2,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
    {
      title: 'Engineering School',
      img: EngineeringSchool2,
      key: uuid(),
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future.",
    },
  ],
  frequentQuestions: {
    question: [
      { title: 'What is Ydev academy about?', key: uuid(), details: '' },
      {
        title: 'Is Ydev academy for me?',
        key: uuid(),
        details:
          'Yes, Ydev is for anyone looking at upskilling or transitioning to a tech career. If you are looking at building a rewarding and promising tech career, Ydev is the right place for you.',
      },
      { title: 'How can Ydev help me?', key: uuid(), details: '' },
    ],
  },
  testimonals: [
    {
      image: Dami,
      key: uuid(),
      detail:
        'YDev provided a solid foundation for me to understand the basics about data science. It also grew my curiosity about the applicability of data to my work and the various ways to which I could use and apply those learnings in different scenarios. The tutors were also very patient and understanding and will work with you based on your level of understanding. I would absolutely recommend YDev to any one who wants to learn, grow or develop a path in data science.',
      name: 'Dami Thompson',
      company: <EcoVc />,
    },
    {
      image: Ifechukwu,
      key: uuid(),
      detail:
        'Learning in Ydev was easy, they made learning fun and I always looked forward to the next class. When the cohort was over, they were still willing to provide assistance and that was really great',
      name: 'Ifechukwu Obiaku',
      company: <OneHealth />,
    },
    {
      image: Chika2,
      key: uuid(),
      detail:
        'YDev has amazing instructors who take their time to drive home each curriculum. They always follow up projects to test your understanding and capabilities of the curriculum taught.  I can certainly boast that my objectives were met and goals achieved.',
      name: 'Chika	Ezedunukwe, Research Analyst, Spurt',
      company: <Leave style={{ fontSize: '2rem' }} />,
    },
    {
      image: Ifechukwu,
      key: uuid(),
      detail:
        'Learning in Ydev was easy, they made learning fun and I always looked forward to the next class. When the cohort was over, they were still willing to provide assistance and that was really great',
      name: 'Ifechukwu Obiaku',
      company: <OneHealth />,
    },
    {
      image: Chika2,
      key: uuid(),
      detail:
        'YDev has amazing instructors who take their time to drive home each curriculum. They always follow up projects to test your understanding and capabilities of the curriculum taught.  I can certainly boast that my objectives were met and goals achieved.',
      name: 'Chika	Ezedunukwe, Research Analyst, Spurt',
      company: <Leave style={{ fontSize: '2rem' }} />,
    },
  ],
  processLists: [
    {
      count: '01',
      icon: <Blocks />,
      key: uuid(),
      title: 'Pre-course interactive session',
      details:
        'You will be assigned a pre-course task to prepare you for the program. Completion of this puts you on track in advancing your start to a rewarding tech career.',
    },
    {
      count: '02',
      icon: <Brain />,
      key: uuid(),
      title: 'Technical challenge',
      details:
        'Get to test your ability with some technical challenges solving code problems with creative software solutions. Your solutions will be scored as this will determine your progress into the next stage.',
    },
    {
      count: '03',
      icon: <Friends />,
      key: uuid(),
      title: 'Cohort matching',
      details:
        'You’ll be matched with 3 other applicants. Collaborations will be made to compliment your technical specialities. Here you’ll build a project with each of them.',
    },
    {
      count: '04',
      icon: <ScreenTime />,
      key: uuid(),
      title: 'Fulltime program',
      details:
        'After the successful completion of the earlier stages, Ydev welcomes you to her full-time cohort program where you will get the necessary materials to facilitate your onboarding and learning.',
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
  blogs: [
    {
      title: 'Wireframing session',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding.",
      img: wireframing,
    },
    {
      title: 'Design thinking session',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others.",
      img: designThinking,
    },
    {
      title: 'Functional design session',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers.",
      img: functionalDesign,
    },
  ],
}

export default HomeContent
