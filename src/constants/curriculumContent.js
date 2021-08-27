import { v4 as uuid } from 'uuid'
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

const curriculumContent = {
  allCourses: [
    {
      no: '01',
      title: 'Design school',
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: designSchool,
      curicula: [
        {
          no: '30',
          key: uuid(),
          details: 'Weeks of immersive training in product design',
        },
        {
          no: '63',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '12', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '02',
      title: 'Software school',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: softwareSchool,
      curicula: [
        {
          no: '33',
          key: uuid(),
          details: 'Weeks of immersive training in software development',
        },
        {
          no: '70',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '14', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '03',
      title: 'Product school',
      key: uuid(),

      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: productSchool,
      curicula: [
        {
          no: '32',
          details: 'Weeks of immersive training in products',
        },
        {
          no: '81',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '11', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '04',
      title: 'DevOps school',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: devOpsSchool,
      curicula: [
        {
          no: '30',
          key: uuid(),
          details: 'Weeks of immersive training in devops',
        },
        {
          no: '63',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '12', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '05',
      title: 'Product management school',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: productManagementSchool,
      curicula: [
        {
          key: uuid(),
          no: '30',
          details: 'Weeks of immersive training in product design',
        },
        {
          no: '63',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '12', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '06',
      title: 'QA school',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: qaSchool,
      curicula: [
        {
          no: '30',
          key: uuid(),
          details: 'Weeks of immersive training in product design',
        },
        {
          no: '63',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '12', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '07',
      title: 'Engineering school',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: engineeringSchool,
      curicula: [
        {
          no: '30',
          key: uuid(),
          details: 'Weeks of immersive training in product design',
        },
        {
          no: '63',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '12', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
    {
      no: '08',
      title: 'Data school',
      key: uuid(),
      detail:
        "A pre-course task will be assigned to you. It's to prepare both newcomers to coding and others for future. Lorem ipsum lasum",
      img: dataSchool,
      curicula: [
        {
          no: '30',
          key: uuid(),
          details: 'Weeks of immersive training in product design',
        },
        {
          no: '63',
          key: uuid(),
          details: 'Carefully crafted topics in curriculum',
        },
        { no: '12', key: uuid(), details: 'Lorem Ipsum masun Ippo' },
      ],
    },
  ],
}

export default curriculumContent
