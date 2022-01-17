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
  Echo,
  OneHealth,
  Spur,
  Imad,
  PalmCredit,
  Casafina,
  Creditwise,
  Oau,
} from '../assets/convertedSvgs'
import {
  Dami,
  Ifechukwu,
  Chika,
  Abiola,
  Adegbowale,
  Damilola,
  Opeyemi,
  Alaja,
  Ifeanyi,
} from '../assets/png'

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
      title: 'Ydev Academy|Rethinking Africa and the Future of Work',
      details:
        'We take a look at some of these new trends and how it is shaping the Future of Work.',
      imgAddress:
        'https://miro.medium.com/max/1280/1*-ezgLHDkNBmIw6HqwM0B8w.jpeg',
      link:
        'https://medium.com/ydevacademy/ydev-academy-rethinking-africa-and-the-future-of-work-c5c196e10c33',
    },
    {
      title: 'How to Evolve with the 21st Century Workplace',
      details:
        'Take a moment to brainstorm on how technologies have shaped and become integral parts of our lives over the past two decades.',
      imgAddress:
        'https://miro.medium.com/max/1280/1*37O7jhOAUFCOOxWOCP9aYg.jpeg',
      link:
        'https://medium.com/ydevacademy/ydev-academy-rethinking-africa-and-the-future-of-work-c5c196e10c33',
    },
    {
      title: 'How COVID-19 Taught us the Importance of Upskilling',
      details:
        'Learn how COVID19 changed the workplace and increased the importance of upskilling for continued success on a job.',
      imgAddress:
        'https://miro.medium.com/max/1280/1*fpuXFYNWbqYnErrlBU9z9Q.jpeg',
      link:
        'https://medium.com/ydevacademy/how-covid-19-taught-us-the-importance-of-upskilling-f6c51c816cc',
    },
  ],
  testimonials: [
    {
      img: Dami,
      details:
        'Ydev provided a solid foundation for me to understand the basics about data science. The tutors were also very patient and understanding and will work with you based on your level of understanding. I would absolutely recommend YDev to any one who wants to learn, grow or develop a path in data science.',
      name: 'Dami Thompson',
      logo: <Echo />,
    },
    {
      img: Ifechukwu,
      details:
        'Learning in Ydev was easy, they made learning fun and I always looked forward to the next class. When the cohort was over, they were still willing to provide assistance and that was really great',
      name: 'Ifechukwu Obiaku',
      logo: <OneHealth />,
    },
    {
      img: Chika,
      details:
        'Ydev has amazing instructors who take their time to drive home each curriculum. They always follow up projects to test your understanding and capabilities of the curriculum taught. I can certainly boast that my objectives were met and goals achieved.',
      name: 'Chika Ezedunukwe, Research Analyst, Spurt',
      logo: <Spur />,
    },
    {
      img: Abiola,
      details:
        "Generally, it's been an enriching experience as I have come to appreciate and apply more smarter ways of using data.",
      name: 'Abiola Olatunji, Academic Auditor, IMAAD Schools',
      logo: <Imad />,
    },
    {
      img: Adegbowale,
      details:
        'Thinking of a smooth Journey into the world of data science; Think YDEV....From the Masterclass into the Main bowl, the instructors with apt knowledge of what to do delivers with cutting-edge training skills. Shoutout to the Team: Lota, Whyte, Biyi, Ben and Gbemi...... A very big THANK YOU to the YDEV family.',
      name: 'Adegbowale Adegbite, Data Analyst, Palm Credit',
      logo: <PalmCredit />,
    },
    {
      img: Damilola,
      details:
        "I did not think I could ever understand any programming language and I was wondering what I was getting myself into. The ydev instructors made it easy for me to get through the course and I'm happy I made the decision to transition",
      name:
        'Damilola Popoola, Business Development Specialist, Casafina Credit',
      logo: <Casafina />,
    },
    {
      img: Opeyemi,
      details:
        'It was a wonderful experience. Very attentive instructor. It was like I had a personal teacher despite being a remote.',
      name: 'Opeyemi Ogundeyi, Product Manager, Credit Wise',
      logo: <Creditwise />,
    },
    {
      img: Alaja,
      details:
        'Ydev Academy is a great institution when it comes to data analysis,data science and management. The tutors are so good and are ready to teach you. I was able to analyze data using various software such as Excel,Power BI and even programming language such as R and Python. Ydev Academy is the best for anyone who wants to be a great data scientist or analyst',
      name: '',
      logo: <Imad />,
    },
    {
      img: Ifeanyi,
      details:
        "Going into Ydev, I was a bit unsure of what I wanted to be honest. I knew I needed to add an extra skill to augment my course of study, Electronics and electrical engineering. However, on going on through with the Ydev course, this new skill opened my eyes to new niches that I wasn't aware existed, even with my course of study. Finishing the Ydev course, I've found myself on this new path with various new possibilities. Totally recommend.",
      name: 'Ifeanyi Nwadugbo, Student, Oau',
      logo: <Oau />,
    },
  ],
  podcastLists: [
    {
      name: 'Google Podcasts',
      link:
        'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82NThkNWIwYy9wb2RjYXN0L3Jzcw==',
    },
    {
      name: 'Spotify',
      link: 'https://open.spotify.com/show/2VLgwjb36s4DfFnQfvizEj',
    },
    {
      name: 'Anchor',
      link: 'https://anchor.fm/techlifecast',
    },
    {
      name: 'Breaker',
      link: 'https://www.breaker.audio/bracket-techpod',
    },
    {
      name: 'Pocket Casts',
      link: 'https://pca.st/q8mlgbz2',
    },
    {
      name: 'Radio Public',
      link: 'https://radiopublic.com/techlifecast-6rqaKk',
    },
  ],
}

export default HomeContent
