import { v4 as uuid } from 'uuid'

const upcomingEventContent = {
  eventLists: [
    {
      date: 'Jul 24',
      id: uuid(),
      title: 'Salesforce Cohort',
      content: {
        link: 'https://bit.ly/YdevSalesforceCohort',
        detail:
          'Our Salesforce cohort starts on the 2nd of October, 2021. Get started and connected to the endless opportunities that Salesforce offers. Whatever your interest is, there is a career path for you with Salesforce. Salesforce continues to provide job opportunities and with this cohort, you can be on course to building a promising career path with Salesforce.',
      },
    },
    {
      date: 'October 9',
      id: uuid(),
      title: 'DevOps/Cloud Computing Cohort',
      content: {
        link: 'https://bit.ly/YdevDevOpsCC',
        detail:
          'This is a 12-week cohort guaranteed to take you from a beginner to an expert in cloud computing. It provides you with the right fundamentals to get started in building a successful career in DevOps/Cloud computing.',
      },
    },
  ],
}

export default upcomingEventContent
