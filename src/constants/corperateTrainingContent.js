import { v4 as uuid } from 'uuid'
import {
  training,
  Inclass,
  customTraining,
  relocationTraining,
} from '../assets/svgImgs'

const corperateTrainingContent = {
  help: [
    {
      title: 'Exclusive training',
      key: uuid(),
      image: training,
      details:
        'We curate personalized Ydev courses for private sessions for you and your team.',
    },
    {
      title: 'In-class training',
      key: uuid(),
      image: Inclass,
      details:
        'In-class training: This provides you with exclusive partner pricing in our regularly scheduled learning classes.',
    },
    {
      title: 'Custom training',
      key: uuid(),
      image: customTraining,
      details:
        'We work with you to build and develop custom content tailored to your training needs and business goals.',
    },
    {
      title: 'Relocation-ready training',
      key: uuid(),
      image: relocationTraining,
      details:
        'This is a special program for those seeking relocation opportunities or a switch in career to a new location. We cater for this need by providing the right training that allows you gain tech skills that allows you to transition to new careers or adapt to new opportunities anywhere in the world.',
    },
  ],
}

export default corperateTrainingContent
