import { v4 as uuid } from 'uuid'
import { Handshake, Money, Plane, Eye2 } from '../assets/convertedSvgs'

const becomeAnInstructorContent = {
  joinYdev: [
    {
      title: 'Great Team',
      key: uuid(),
      details:
        'You get to work with highly motivated individuals with great vision.',
      icon: Handshake,
    },
    {
      title: 'Market-Leading Compensation',
      key: uuid(),
      details:
        'We offer a rewarding compensation for your time and commitment being a part of our winning team.',
      icon: Money,
    },
    {
      title: 'Create Direct Impact',
      key: uuid(),
      details:
        'Our work is driven at impacting lives positively. Get to be a part of our team creating better outcomes for young people in Nigeria and across Africa.',
      icon: Plane,
    },
    {
      title: 'Self-Development',
      key: uuid(),
      details:
        'We are equally interested in your personal growth and development just as we are in our students. We provide continuous support to our team members to ensure they rise to the peak of their career.',
      icon: Eye2,
    },
  ],
  jobItems: [
    {
      title: 'Fullstack Lead',
      time: '1 month ago',
      key: uuid(),
    },
    {
      title: 'Frontend instructor',
      key: uuid(),
      time: '1 month ago',
    },
    {
      title: 'Social Media Marketing',
      key: uuid(),
      time: '1 month ago',
    },
    {
      title: 'Product Marketing Associate',
      time: '1 month ago',
      key: uuid(),
    },
  ],
  tabsContent: {
    instructors: [
      {
        title: 'What am I expected to do as a instructor?',
        key: uuid(),
        details: '',
      },
      {
        title: 'What courses do you offer?',
        key: uuid(),
        details:
          'Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to software engineering. Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to  engineering. Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to  engineering.',
      },
      { title: 'How much time does this take?', key: uuid(), details: '' },
    ],
  },
}

export default becomeAnInstructorContent
