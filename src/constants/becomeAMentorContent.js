import { v4 as uuid } from 'uuid'
import { mentor1, mentor2, mentor3 } from '../assets/svgImgs'
import { Eye, Love, Time, Tie } from '../assets/convertedSvgs'

const becomeAMentorContent = {
  goodFit: [
    {
      title: 'Do you have the free time?',
      key: uuid(),
      details:
        'We are flexible in how much time you want to invest. You set the expectations – so this can be between 10 minutes per day and some hours per week. You need to make time for that commitment.',
      icon: Time,
    },
    {
      title: 'Are you good with people?',
      key: uuid(),
      details:
        "You'll meet people from all sorts of backgrounds and situations. There is no space for elitism or judgement. Being open and understanding people's needs is a must.",
      icon: Love,
    },
    {
      title: 'Do you have the experience?',
      key: uuid(),
      details:
        "Mentees will rely on your experience in the field, so we're looking for a few years in the industry. If you are coming straight out of school, let's wait for a bit.",
      icon: Tie,
    },
    {
      title: 'Will you show up',
      key: uuid(),
      details:
        "The #1 reason why people love our mentorships is because people care for them and are available. If you can't commit to checking in once per day or two, this might not be for you.",
      icon: Eye,
    },
  ],
  carousel: [mentor1, mentor2, mentor3],
}

export default becomeAMentorContent
