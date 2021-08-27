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
  studentStories: {
    allGrads: [
      {
        name: 'Anthonia Umeh',
        profession: 'Banker',
        key: uuid(),
        img: Anthonia,
        details:
          'I went to Ydev not knowing anything about data science and programming but with a lot of interest in the topic...',
      },
      {
        name: 'Olufade Obaloluwa',
        profession: 'Accountant',
        img: Olufade,
        key: uuid(),
        details:
          'From the Masterclass into the Main bowl, the instructors with apt knowledge of what to do delivered with cutting-edge...',
      },
      {
        name: 'Chika Ezedunukwe',
        profession: 'Research Analyst',
        img: Chika,
        key: uuid(),
        details:
          'I came to the YDEV to make a career transition to data analyst. Instructors are very knowledgeable. ',
      },
      {
        name: 'Increase Ibeh',
        profession: 'Software Engineer',
        key: uuid(),
        img: Increase,
        details:
          'Lorem ipsum dolor sit amet, nibh putate pulvinar, sem ante tincidunt purus, ut uam nunc nisi vel sem. ',
      },
      {
        name: 'Imasuen Madio',
        profession: 'Software Engineer',
        key: uuid(),
        img: Imasuen,
        details:
          'Lorem ipsum dolor sit amet, nibh putate pulvinar, sem ante tincidunt purus, ut uam nunc nisi vel sem. ',
      },
      {
        name: 'Imasuen Madio',
        profession: 'Software Engineer',
        img: madio,
        key: uuid(),
        details:
          'Lorem ipsum dolor sit amet, nibh putate pulvinar, sem ante tincidunt purus, ut uam nunc nisi vel sem. ',
      },
    ],
  },
}

export default aboutUsContent
