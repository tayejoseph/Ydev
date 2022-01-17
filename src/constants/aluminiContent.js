import { Lego, Form, Todo, Mach, Tecto, Nutm } from '../assets/convertedSvgs'
import { Tolu } from '../assets/png'
import {
  TopAlumin,
  Flexible,
  Support,
  firstEng,
  thirdEng,
} from '../assets/svgImgs'

const aliuminiContent = {
  skills: [
    {
      img: TopAlumin,
      title: 'Hire the top 3%',
      details:
        'Get access to a pool of well trained and vetted African tech talents to work with your team and deliver efficiently',
    },
    {
      img: Flexible,
      title: 'Flexible placements',
      details:
        'Whether you are hiring for short-term, part-time or full time, we’ve got you covered. Hire fast, hire flexibly.',
    },
    {
      img: Support,
      title: 'Support services',
      details:
        'We help you structure all your internal hiring & onboarding processes with help of dedicated professional recruiters on our team.',
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
        'I enjoyed working with the YDev team. They care about student learning and know how to deliver a good learning experience.',
      name: 'Debo Odunlanmi, Nigerian University of Technology and Management.',
      company: Nutm,
    },
    {
      img: Tolu,
      detail:
        'Service was very excellent, going far above and beyond on all requirements. Customer service level is top notch and professionalism is displayed by all. Your go-to guys.',
      name: 'Toluwaleke Odunuga, Tectonic Oil Tools Limited.',
      company: Tecto,
    },
    {
      img: thirdEng,
      detail: 'Very Impressive and Professional. I will keep on coming back.',
      name: 'Emeka Okwusi, IMach Consult Limited.',
      company: Mach,
    },
  ],
}

export default aliuminiContent
