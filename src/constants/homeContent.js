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
} from '../assets/convertedSvgs'
import {
  wireframing,
  designThinking,
  functionalDesign,
} from '../assets/svgImgs'

const HomeContent = {
  exclusives: [
    {
      title: 'Robust curriculum',
      icon: <Curriculum />,
      details:
        'Students that go through our curriculum are guaranteed to learn with a robust curriculum that is world standard. Our curriculum guarantees that all of our students are prepared and capable of championing their own niche in the tech world',
    },
    {
      title: 'Extensive placement',
      icon: <Payment />,
      details:
        'Our structure goes beyond equipping students with competitive in-demand tech skills; we go above and beyond to provide placements where our students can intern and gain hands-on experience with top firms both locally and internationally.',
    },
    {
      title: 'Alumni support',
      icon: <Support />,
      details:
        'We continue to help our graduates after they have completed a program or course, connecting them to opportunities and ensuring they have all the resources they need to build a successful tech career.',
    },
    {
      title: 'Industry experts',
      icon: <Experts />,
      details:
        'Our faculty consists of industry professionals with extensive knowledge and experience in a variety of fields. We also leverage existing partnerships and relationships with OEMs and other international partners to link our students with the top trainers and facilitators.',
    },
  ],
  processLists: [
    {
      count: '01',
      icon: <Blocks />,
      title: 'Pre-course interactive session',
      details:
        'You will be assigned a pre-course task to prepare you for the program. Completion of this puts you on track in advancing your start to a rewarding tech career.',
    },
    {
      count: '02',
      icon: <Brain />,
      title: 'Technical challenge',
      details:
        'Get to test your ability with some technical challenges solving code problems with creative software solutions. Your solutions will be scored as this will determine your progress into the next stage.',
    },
    {
      count: '03',
      icon: <Friends />,
      title: 'Cohort matching',
      details:
        'You’ll be matched with 3 other applicants. Collaborations will be made to compliment your technical specialities. Here you’ll build a project with each of them.',
    },
    {
      count: '04',
      icon: <ScreenTime />,
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
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding.",
      img: wireframing,
    },
    {
      title: 'Design thinking session',
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others.",
      img: designThinking,
    },
    {
      title: 'Functional design session',
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers.",
      img: functionalDesign,
    },
  ],
}

export default HomeContent
