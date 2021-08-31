import { v4 as uuid } from 'uuid'
import {
  Lego,
  Form,
  Todo,
  Google2,
  CircleCi2,
  Cowrywise,
} from '../assets/convertedSvgs'
import {
  TopAlumin,
  Flexible,
  Support,
  firstEng,
  secondEng,
  thirdEng,
} from '../assets/svgImgs'

const aliuminiContent = {
  skills: [
    {
      img: TopAlumin,
      key: uuid(),
      title: 'Hire the top 3%',
      details:
        'Get access to a pool of well trained and vetted African tech talents to work with your team and deliver efficiently',
    },
    {
      img: Flexible,
      key: uuid(),
      title: 'Flexible placements',
      details:
        'Whether you are hiring for short-term, part-time or full time, we’ve got you covered. Hire fast, hire flexibly.',
    },
    {
      img: Support,
      key: uuid(),
      title: 'Support services',
      details:
        'We help you structture all your internal hiring & onboarding processes with help of dedicated professional recruiters on our team.',
    },
  ],
  hiringProcess: [
    {
      no: '01',
      key: uuid(),
      img: Lego,
      title: 'Fill the company needs assessment form',
      details:
        'Take a minute to complete this form letting us know the needs of your company. This is important as our actions are tailored to your needs.',
    },
    {
      no: '02',
      img: Form,
      key: uuid(),
      title: 'Drop your company name and contact details',
      details:
        'Drop your company name and details to enable us to reach out to you. While filling the form, you can indicate if you will like us to reach you via phone call, email or a physical meeting.',
    },
    {
      no: '03',
      key: uuid(),
      img: Todo,
      title: 'Submit form',
      details: 'Upon completing the form, hit the submit button.',
    },
  ],
  recommendation: [
    {
      img: firstEng,
      key: uuid(),
      detail:
        'Lorem ipsum dolor sit amet, elit. Nam auctor, nibh a vulputate pulvinar, sem ante tincidunt purus, ut aliquam nunc nisi vel sem. Vestibulum id magna sodales',
      name: 'Tobi Seemenow, Engineer',
      company: Google2,
    },
    {
      img: secondEng,
      key: uuid(),
      detail:
        'Lorem ipsum dolor sit amet, elit. Nam auctor, nibh a vulputate pulvinar, sem ante tincidunt purus, ut aliquam nunc nisi vel sem. Vestibulum id magna sodales',
      name: 'Rogie Seemenow, Designer',
      company: CircleCi2,
    },
    {
      img: thirdEng,
      key: uuid(),
      detail:
        'Lorem ipsum dolor sit amet, elit. Nam auctor, nibh a vulputate pulvinar, sem ante tincidunt purus, ut aliquam nunc nisi vel sem. Vestibulum id magna sodales',
      name: 'Raminat Seemenow, DevOps',
      company: Cowrywise,
    },
  ],
}

export default aliuminiContent
