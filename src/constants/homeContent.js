import { v4 as uuid } from 'uuid'
import AppInfo from './appInfos'
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

console.log(AppInfo, 'sdjksdjk')
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
      {
        title: 'What is Ydev academy about?',
        key: uuid(),
        details:
          'Ydev is a platform that is providing young people with the necessary digital and future skills that enables them to be competent and skilled to stay relevant and connected to global opportunities.',
      },
      {
        title: 'Is Ydev academy for me?',
        key: uuid(),
        details:
          'Yes, Ydev is for anyone looking at upskilling or transitioning to a tech career. If you are looking at building a rewarding and promising tech career, Ydev is the right place for you.',
      },
      {
        title: 'How can Ydev help me?',
        key: uuid(),
        details:
          'Ydev creates an enabling environment that helps you get a good start into the tech world. Even without a coding background,  we provide a structure that allows you to easily map your journey. Very importantly, you get to join a community that provides continuous support even upon graduation. We also enable you gain soft skills that help you ease into your preferred role.',
      },
      {
        title: 'Where are you located?',
        key: uuid(),
        details: '10A, Hughes Avenue, Yaba, Lagos',
      },
      {
        title: 'Can I partake in your training from anywhere?',
        key: uuid(),
        details:
          'Yes, you can. Our courses are structured to allow anyone from anywhere partake in our training.',
      },
      {
        title:
          'Can I be a part of your cohort if I already have a full-time job?',
        key: uuid(),
        details:
          'Yes, you can. We offer flexible programs that allow full-time employees to find time to upskill themselves.',
      },
    ],
    students: [
      {
        title: 'Can I apply even while in school?',
        key: uuid(),
        details:
          'Yes, you can. We encourage students to apply as the earlier you get introduced to tech skills, the better you position yourself for the future of work.',
      },
      {
        title: 'Do you offer internship opportunities?',
        key: uuid(),
        details:
          'Yes, we do. Upon completion of our cohort, we offer placements to our students to enable them gain mastery of the skills they have learned.',
      },
      {
        title: 'Do you offer in-campus training?',
        key: uuid(),
        details:
          'In a bid to further promote tech skills among young Nigerians, we partner with tertiary institutions and corporate institutions to take learning to students in school.',
      },
      {
        title: 'I have no background knowledge in coding. Can I still apply?',
        key: uuid(),
        details:
          'Yes, you can, We encourage students without coding history to apply as these tech skills can be learned by anyone.',
      },
    ],
    enterprise: [
      {
        title: 'Do you train employees for companies?',
        key: uuid(),
        details:
          'Yes, we do. We offer a dynamic curriculum that is tailored to match the needs of employees and employers around the globe.',
      },
      {
        title: 'Do you provide support with talent recruitment for companies?',
        key: uuid(),
        details:
          'Yes, we do. From our vast pool of graduates, we provide qualified talents to firms based on the needs of your teams, business and individuals.',
      },
      {
        title: 'What courses do you teach?',
        key: uuid(),
        details:
          'Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to software engineering. ',
      },
      {
        title: 'Are there any special benefits partnering with Ydev?',
        key: uuid(),
        details:
          'Yes, there are. Firstly, we teach and expose your employees to new tools and methods so that you can produce results and bring greater value to your workplace. Secondly, we help enterprise business/clients re-tool their workforce based on customizable curriculums.',
      },
      {
        title: 'How do we reach you?',
        key: uuid(),
        details: (
          <span>
            You can call us on{' '}
            <a href={`tel:${AppInfo.appPhone}`}>{AppInfo.appPhone}</a> or reach
            out to us via email at
            <a href={`tel:${AppInfo.appEmail}`}>{AppInfo.appEmail}</a>
          </span>
        ),
      },
    ],
    mentors: [
      {
        title: 'How does it work?',
        key: uuid(),
        details:
          'Our mentorship program is designed to allow you to share your experience and guide mentees in advancing their career. Based on the expertise and interest, you will be matched with a mentee for a certain period of time.',
      },
      {
        title: 'How much time does it take?',
        key: uuid(),
        details:
          'This is usually dependent on you. With a flexible structure, we allow you to decide the number of minutes per day and hours per week you will like to commit to.',
      },
      {
        title: 'Is this a full-time program?',
        key: uuid(),
        details:
          'No, it’s not. The mentorship program allows you to be able to work with a flexible structure that fits your calendar and schedule.',
      },
      {
        title: 'What do I need to qualify as a mentor?',
        key: uuid(),
        details:
          'To be a mentor, you must possess transferable skills, expertise and a strong track record in any tech-related field.',
      },
    ],
    training: [
      {
        title: 'How do I register my team for the corporate training?',
        key: uuid(),
        details:
          'To register your team for our personalized corporate training, kindly visit the “corporate training” section on our website and fill the form to enable us to contact you with more details.',
      },
      {
        title: 'How long does the corporate training last?',
        key: uuid(),
        details:
          'Our corporate training is usually bespoke and tailored to the needs of the company. Duration is dependent on different factors which may include the availability of the company team members and the skills to be learned. Kindly get in touch with us to enable us to work out a schedule that fits you and your team.',
      },
      {
        title: 'Does the training require our team coming to your office?',
        key: uuid(),
        details:
          'Not necessarily. Besides organizing training that takes place in our own space, we also go the extra mile to train company staff in their office space. All you need to do is communicate the kind of training you want for your team, schedule a date and we will be there.',
      },
    ],
    instructors: [
      {
        title: 'What does it take to be an instructor?',
        key: uuid(),
        details:
          'Becoming an instructor with Ydev requires your expertise, dedication and will to impact knowledge to others..',
      },
      {
        title: 'Are there benefits to one becoming an instructor?',
        key: uuid(),
        details:
          'Yes, there are. As an instructor, you get the opportunity to learn, earn and connect with other like-minded individuals. Our structure supports self-growth and we offer a rewarding compensation for your time and commitment being a part of our winning team.',
      },
      {
        title: 'Is this a full-time program?',
        key: uuid(),
        details:
          'No, it’s not. As an instructor, you get to work with us based on upcoming projects/training.',
      },
      {
        title: 'Why should I join your team as an instructor?',
        key: uuid(),
        details:
          'We are a team of young and motivated individuals with a clear vision of directly impacting the lives of tech enthusiasts across the country. Joining us will give you the opportunity to work with highly motivated individuals and you also get to enjoy continuous support from team members to ensure you rise to the peak of your career.',
      },
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
