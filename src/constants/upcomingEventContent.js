import { v4 as uuid } from 'uuid'
import { YDevSession } from '../assets/svgImgs'

const upcomingEventContent = {
  eventLists: [
    {
      date: 'Jul 24',
      id: uuid(),
      title: 'Data Science Fundamentals with Rotimi Seton',
    },
    {
      date: 'Jul 31',
      id: uuid(),
      title: 'Design Fireside chat with Biyi Adetunji',
    },
    {
      date: 'Apr 6',
      title: 'Data Science & Web Dev Open House',
      id: uuid(),
      content: {
        detail:
          "Come to our LIVE Open House where you'll learn how Ydev can help you launch a new career in tech. Instructors will share information and answer questions about our Data Science and Full Stack Web Development courses. Plus, you'll learn more about our live, remote classes, our world-class job search support, and how to maximize your chances of being admitted.",
        img: YDevSession,
      },
    },
    {
      date: 'Aug 7',
      id: uuid(),
      title: 'Ydev Data Science Cohort You want to become a tech bro/sis?',
    },
  ],
}

export default upcomingEventContent
