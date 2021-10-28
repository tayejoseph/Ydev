import { v4 as uuid } from 'uuid'

const upcomingEventContent = {
  eventLists: [
    {
      date: 'October 2',
      id: uuid(),
      details:
        'Our Salesforce cohort starts on the 2nd of October, 2021. Get started and connected to the endless opportunities that Salesforce offers. Whatever your interest is, there is a career path for you with Salesforce. Salesforce continues to provide job opportunities and with this cohort, you can be on course to building a promising career path with Salesforce.',
      link:
        'https://docs.google.com/forms/d/e/1FAIpQLSeF7RG8YO82nEbdFeDwSE_925T6_2-nMKSql8tUnn2QE455jg/viewform',
      title: 'Salesforce Cohort',
    },
    {
      date: 'October 9',
      id: uuid(),
      link:
        'https://docs.google.com/forms/d/e/1FAIpQLSdgHjH6-ssriCMk1j6AgbzQDsR2KeDF5RDKqHbr8H56_wIePw/viewform',
      details:
        'This is a 12-week cohort guaranteed to take you from a beginner to an expert in cloud computing. It provides you with the right fundamentals to get started in building a successful career in DevOps/Cloud computing.',
      title: 'DevOps/Cloud Computing Cohort',
    },
  ],
}

export default upcomingEventContent
