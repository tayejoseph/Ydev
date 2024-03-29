import React from 'react'
import { Tabs, PalletOpen } from '../../../UI'
import { contacts } from '../../../constants'
import Container from './styles'

const tabContent = [
  {
    title: 'All questions',
    content: [
      {
        title: 'Do you train employees for companies?',
        details:
          'Yes, we do. We offer a dynamic curriculum that is tailored to match the needs of employees and employers around the globe.',
      },
      {
        title: 'Do you provide support with talent recruitment for companies?',
        details:
          'Yes, we do. From our vast pool of graduates, we provide qualified talents to firms based on the needs of your teams, business and individuals.',
      },
      {
        title: 'What courses do you teach?',
        details:
          'Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to software engineering.',
      },
      {
        title: 'Are there any special benefits partnering with Ydev?',
        details:
          'Yes, there are. Firstly, we teach and expose your employees to new tools and methods so that you can produce results and bring greater value to your workplace. Secondly, we help enterprise business/clients re-tool their workforce based on customizable curriculums.',
      },
      {
        title: 'How do we reach you?',
        details: (
          <>
            You can call us on{' '}
            <a href={`tel:${contacts.phoneNo}`}>{contacts.phoneNo}</a> or reach
            out to us via email at{' '}
            <a href={`mailto:${contacts.enterpriseEmail}`}>
              {contacts.enterpriseEmail}
            </a>
          </>
        ),
      },
    ],
  },
  {
    title: 'Students',
    content: [
      {
        title: 'Can I apply even while in school?',
        details:
          'Yes, you can. We encourage students to apply as the earlier you get introduced to tech skills, the better you position yourself for the future of work.',
      },
      {
        title: 'Do you offer internship opportunities?',
        details:
          'Yes, we do. Upon completion of our cohort, we offer placements to our students to enable them gain mastery of the skills they have learned.',
      },
      {
        title: 'Do you offer in-campus training?',
        details:
          'In a bid to further promote tech skills among young Nigerians, we partner with tertiary institutions and corporate institutions to take learning to students in school.',
      },
      {
        title: 'I have no background knowledge in coding. Can I still apply?',
        details:
          'Yes, you can, We encourage students without coding history to apply as these tech skills can be learned by anyone.',
      },
    ],
  },
  {
    title: 'Mentors',
    content: [
      {
        title: 'How does it work?',
        details:
          'Our mentorship program is designed to allow you to share your experience and guide mentees in advancing their career. Based on the expertise and interest, you will be matched with a mentee for a certain period of time.',
      },
      {
        title: 'How much time does it take?',
        details:
          'This is usually dependent on you. With a flexible structure, we allow you to decide the number of minutes per day and hours per week you will like to commit to.',
      },
      {
        title: 'Is this a full-time program?',
        details:
          'No, it’s not. The mentorship program allows you to be able to work with a flexible structure that fits your calendar and schedule.',
      },
      {
        title: 'What do I need to qualify as a mentor?',
        details:
          'To be a mentor, you must possess transferable skills, expertise and a strong track record in any tech-related field.',
      },
    ],
  },
  {
    title: 'Instructors',
    content: [
      {
        title: 'What does it take to be an instructor?',
        details:
          'Becoming an instructor with Ydev requires your expertise, dedication and will to impact knowledge to others.',
      },
      {
        title: 'Are there benefits to one becoming an instructor?',
        details:
          'Yes, there are. As an instructor, you get the opportunity to learn, earn and connect with other like-minded individuals. Our structure supports self-growth and we offer a rewarding compensation for your time and commitment being a part of our winning team.',
      },
      {
        title: 'Is this a full-time program?',
        details:
          'No, it’s not. As an instructor, you get to work with us based on upcoming projects/training.',
      },
      {
        title: 'Why should I join your team as an instructor?',
        details:
          'We are a team of young and motivated individuals with a clear vision of directly impacting the lives of tech enthusiasts across the country. Joining us will give you the opportunity to work with highly motivated individuals and you also get to enjoy continuous support from team members to ensure you rise to the peak of your career.',
      },
    ],
  },
  {
    title: 'Enterprise',
    content: [
      {
        title: 'Do you train employees for companies?',
        details:
          'Yes, we do. We offer a dynamic curriculum that is tailored to match the needs of employees and employers around the globe.',
      },
      {
        title: 'Do you provide support with talent recruitment for companies?',
        details:
          'Yes, we do. From our vast pool of graduates, we provide qualified talents to firms based on the needs of your teams, business and individuals.',
      },
      {
        title: 'What courses do you teach?',
        details:
          'Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to software engineering.',
      },
      {
        title: 'Are there any special benefits partnering with Ydev?',
        details:
          'Yes, there are. Firstly, we teach and expose your employees to new tools and methods so that you can produce results and bring greater value to your workplace. Secondly, we help enterprise business/clients re-tool their workforce based on customizable curriculums.',
      },
      {
        title: 'How do we reach you?',
        details: (
          <>
            You can call us on{' '}
            <a href={`tel:${contacts.phoneNo}`}>{contacts.phoneNo}</a> or reach
            out to us via email at{' '}
            <a href={`mailto:${contacts.enterpriseEmail}`}>
              {contacts.enterpriseEmail}
            </a>
          </>
        ),
      },
    ],
  },
  {
    title: 'Higher Education',
    content: [
      {
        title: 'Do you train employees for companies?',
        details:
          'Yes, we do. We offer a dynamic curriculum that is tailored to match the needs of employees and employers around the globe.',
      },
      {
        title: 'Do you provide support with talent recruitment for companies?',
        details:
          'Yes, we do. From our vast pool of graduates, we provide qualified talents to firms based on the needs of your teams, business and individuals.',
      },
      {
        title: 'What courses do you teach?',
        details:
          'Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, IT-Ops to software engineering.',
      },
      {
        title: 'Are there any special benefits partnering with Ydev?',
        details:
          'Yes, there are. Firstly, we teach and expose your employees to new tools and methods so that you can produce results and bring greater value to your workplace. Secondly, we help enterprise business/clients re-tool their workforce based on customizable curriculums.',
      },
      {
        title: 'How do we reach you?',
        details: (
          <>
            You can call us on{' '}
            <a href={`tel:${contacts.phoneNo}`}>{contacts.phoneNo}</a> or reach
            out to us via email at{' '}
            <a href={`mailto:${contacts.enterpriseEmail}`}>
              {contacts.enterpriseEmail}
            </a>
          </>
        ),
      },
    ],
  },
  {
    title: 'Corporate training',
    content: [
      {
        title: 'How do I register my team for the corporate training?',
        details:
          'To register your team for our personalized corporate training, kindly visit the “corporate training” section on our website and fill the form to enable us to contact you with more details.',
      },
      {
        title: 'How long does the corporate training last?',
        details:
          'Our corporate training is usually bespoke and tailored to the needs of the company. Duration is dependent on different factors which may include the availability of the company team members and the skills to be learned. Kindly get in touch with us to enable us to work out a schedule that fits you and your team.',
      },
      {
        title: 'Does the training require our team coming to your office?',
        details:
          'Not necessarily. Besides organizing training that takes place in our own space, we also go the extra mile to train company staff in their office space. All you need to do is communicate the kind of training you want for your team, schedule a date and we will be there.',
      },
    ],
  },
]
const Categories = () => {
  return (
    <Container>
      <div className="nav--container">
        <Tabs title="Categories" tabs={tabContent}>
          {({ content }) => content.map((item) => <PalletOpen {...item} />)}
        </Tabs>
      </div>
      <div className="content--container"></div>
    </Container>
  )
}

export default Categories
