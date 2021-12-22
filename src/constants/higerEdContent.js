import { SoftwareSchool, DataSchool, DesignSchool } from '../assets/png'
import contacts from './contacts'

const higherEdContent = {
  carouselContent: [
    {
      title: 'Apprenticeship',
      img: SoftwareSchool,
      details:
        'To better prepare students for life after graduation, we provide an accelerator program where students undergo intensive training, learning in-demand tech skills, and gaining mastery in specific areas',
    },
    {
      title: 'Virtual Career Fairs',
      img: DataSchool,
      details:
        ' We have existing partnerships with top firms both locally and internationally. Partnering with us, universities get the opportunity to host virtual fairs with us availing their students the opportunity to connect with professionals, industry experts, and hiring managers worldwide',
    },
    {
      title: 'NYSC Opportunities',
      img: DesignSchool,
      details:
        'We recognize the importance of the service years and how this period can serve as an incubator period for graduates. Students from partnered universities stand a chance of getting Primary Place of Assignment (PPA) placements at their dream workplace with us; beginning a path to a successful tech career.',
    },
  ],
  faq: [
    {
      title: 'Higher Education',
      content: [
        {
          title: 'Do you train students for companies?',
          details:
            "Yes, we do. We provide a dynamic curriculum that is tailored to the needs of today's market and employers worldwide.",
        },
        {
          title:
            'Do you provide support with student placements for graduates ?',
          details:
            'Yes, we do. From our vast pool of graduates, we provide qualified students to firms based on their needs.',
        },
        {
          title: 'What courses do you teach?',
          details:
            'Our curriculum is made up of in-demand tech skills that range from data science, UI/X design, product management, DevOps to software engineering and much more.',
        },
        {
          title: 'Are there any special benefits partnering with Ydev ?',
          details:
            'There are, indeed. First and foremost, we teach and expose your students to new tools and methods so that they can produce results and add value to any workplace right away. Second, we assist schools in retooling their graduates using customizable curriculums.',
        },
        {
          title: 'How do we reach you?',
          details: (
            <>
              You can call us on{' '}
              <a href={`tel:${contacts.phoneNo}`}>{contacts.phoneNo}</a> or
              reach out to us via email at{' '}
              <a href={`mailto:${contacts.enterpriseEmail}`}>
                {contacts.enterpriseEmail}
              </a>
            </>
          ),
        },
      ],
    },
  ],
}

export default higherEdContent
