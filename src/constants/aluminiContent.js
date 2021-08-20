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
      title: 'Hire the top 3%',
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future coding challenges you'll be tasked with.",
    },
    {
      img: Flexible,
      title: 'Flexible placements',
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future coding challenges you'll be tasked with.",
    },
    {
      img: Support,
      title: 'Support services',
      details:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future coding challenges you'll be tasked with.",
    },
  ],
  hiringProcess: [
    {
      no: '01',
      img: Lego,
      title: 'Fill the company needs assessment form',
      details:
        'Take a minute to complete this form letting us know the needs of your company. This is important as our actions are tailored to your needs.',
    },
    {
      no: '02',
      img: Form,
      title: 'Drop your company name and contact details',
      details:
        'Drop your company name and details to enable us to reach out to you. While filling the form, you can indicate if you will like us to reach you via phone call, email or a physical meeting.',
    },
    {
      no: '03',
      img: Todo,
      title: 'Submit form',
      details: 'Upon completing the form, hit the submit button.',
    },
  ],
  recommendation: [
    {
      img: firstEng,
      detail:
        'Lorem ipsum dolor sit amet, elit. Nam auctor, nibh a vulputate pulvinar, sem ante tincidunt purus, ut aliquam nunc nisi vel sem. Vestibulum id magna sodales',
      name: 'Tobi Seemenow, Engineer',
      company: Google2,
    },
    {
      img: secondEng,
      detail:
        'Lorem ipsum dolor sit amet, elit. Nam auctor, nibh a vulputate pulvinar, sem ante tincidunt purus, ut aliquam nunc nisi vel sem. Vestibulum id magna sodales',
      name: 'Rogie Seemenow, Designer',
      company: CircleCi2,
    },
    {
      img: thirdEng,
      detail:
        'Lorem ipsum dolor sit amet, elit. Nam auctor, nibh a vulputate pulvinar, sem ante tincidunt purus, ut aliquam nunc nisi vel sem. Vestibulum id magna sodales',
      name: 'Raminat Seemenow, DevOps',
      company: Cowrywise,
    },
  ],
}

export default aliuminiContent