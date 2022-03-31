import {
  designSchool,
  softwareSchool,
  productSchool,
  devOpsSchool,
  productManagementSchool,
  qaSchool,
  dataSchool,
  engineeringSchool,
} from '../assets/svgImgs'
import { AppRoutes } from '../constants'

const curriculumContent = {
  allCourses: [
    {
      no: '01',
      title: 'Design school',
      detail:
        'Gain the basic knowledge to help you build a career in Design and grow through fundamental user-centred approaches to stunning user-interfaces.',
      img: designSchool,
      link: AppRoutes.programs.designSchool,
      curicula: [
        { no: '8', details: 'Weeks of immersive training in product design' },
        { no: '30+', details: 'Carefully crafted topics in program' },
        { no: '300+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '02',
      title: 'Software school',
      detail:
        'Start your journey to becoming a full-stack developer. Learn how to write different kinds of code for complex frontend and backend tasks.',
      img: softwareSchool,
      link: AppRoutes.programs.softwareSchool,
      curicula: [
        {
          no: '24',
          details: 'Weeks of immersive training in software development',
        },
        { no: '70+', details: 'Carefully crafted topics in program' },
        { no: '500+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '03',
      title: 'Product school',
      detail:
        'Set yourself up for success and a rewarding career with our product school.',
      img: productSchool,
      link: AppRoutes.programs.productSchool,
      curicula: [
        {
          no: '8',
          details: 'Weeks of immersive training in products',
        },
        { no: '30+', details: 'Carefully crafted topics in program' },
        { no: '200+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '04',
      title: 'DevOps school',
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: devOpsSchool,
      link: AppRoutes.programs.devOpsSchool,
      curicula: [
        {
          no: '20',
          details: 'Weeks of immersive training in Devops',
        },
        { no: '20+', details: 'Carefully crafted topics in program' },
        { no: '300+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '05',
      title: 'Salesforce School',
      detail:
        'Set yourself up for success and a rewarding career with our Salesforce school.',
      img: productManagementSchool,
      link: AppRoutes.programs.salesForceSchool,
      curicula: [
        {
          no: '10',
          details: 'Weeks of immersive training in Salesforce',
        },
        { no: '40+', details: 'Carefully crafted topics in program' },
        { no: '200+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '06',
      title: 'QA/Software Testing school',
      detail:
        'A program that is designed to equip you with the required skills you need to take on quality assurance and software testing roles',
      img: qaSchool,
      link: AppRoutes.programs.qaSchool,
      curicula: [
        {
          no: '8',
          details: 'Weeks of immersive training in Software Testing',
        },
        { no: '40+', details: 'Carefully crafted topics in program' },
        { no: '100+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '07',
      title: 'Cloud Engineering school',
      detail:
        'Learn the basic skills you need to transition into a career in DevOps and Cloud Engineer.',
      img: engineeringSchool,
      link: AppRoutes.programs.cloudSchool,
      curicula: [
        {
          no: '12',
          details: 'Weeks of immersive training in Cloud Engineering',
        },
        { no: '40+', details: 'Carefully crafted topics in program' },
        { no: '76+', details: 'Hours of pratical learning' },
      ],
    },
    {
      no: '08',
      title: 'Data school',
      detail:
        'Learn how to gain insights from complex data and the basics needed to transition into a career in data science and machine learning.',
      img: dataSchool,
      link: AppRoutes.programs.dataSchool,
      curicula: [
        {
          no: '8',
          details: 'Weeks of immersive training in Data',
        },
        { no: '30+', details: 'Carefully crafted topics in program' },
        { no: '100+', details: 'Hours of pratical learning' },
      ],
    },
  ],
}

export default curriculumContent
