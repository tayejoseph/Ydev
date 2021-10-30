import React, { useState, useRef } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { AppRoutes } from '../../constants'
import { Button } from '../../UI'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const menus = [
  {
    title: 'Programs',
    menu: [
      { title: 'Design School', link: AppRoutes.programs.designSchool },
      { title: 'Software School', link: AppRoutes.programs.softwareSchool },
      { title: 'Data School', link: AppRoutes.programs.dataSchool },
      { title: 'Product School', link: AppRoutes.programs.productSchool },
      { title: 'DevOps School', link: AppRoutes.programs.devOpsSchool },
      {
        title: 'QA/Software Testing School',
        link: AppRoutes.programs.devOpsSchool,
      },
      {
        title: 'Cloud Eng School',
        link: AppRoutes.programs.cloudSchool,
      },
      {
        title: 'Salesforce School',
        link: AppRoutes.programs.salesForceSchool,
      },
    ],
  },
  {
    title: 'About',
    menu: [
      { title: 'Our Story', link: AppRoutes.aboutUs.ourStory },
      { title: 'Student Stories', link: AppRoutes.aboutUs.studentStories },
      { title: 'Events', link: AppRoutes.aboutUs.events },
      { title: 'FAQs', link: AppRoutes.aboutUs.faq },
    ],
  },
  {
    title: 'Enterprise',
    menu: [
      {
        title: 'Corporate Training',
        link: AppRoutes.enterprise.corportateTraining,
      },
      { title: 'Hire Our Alumni', link: AppRoutes.enterprise.hireOurAlumni },
    ],
  },
  {
    title: 'Careers',
    menu: [
      {
        title: 'Become An Instructor',
        link: AppRoutes.career.instructor,
      },
      { title: 'Become A Mentor', link: AppRoutes.career.mentor },
    ],
  },
]

const TopNav = () => {
  const history = useHistory()
  const [activePopup, setDisplay] = useState(false)

  const menuList = ({ link, title, menu }) => {
    return (
      <div
        className={`menu--container ${
          title === activePopup ? 'active--menu' : ''
        }`}
        onClick={() => {
          setDisplay(title === activePopup ? false : activePopup)
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setDisplay(title)
          }}
        >
          {title} <IoIosArrowDropdown />
        </button>
        {activePopup === title && (
          <div className="menu--lists">
            {menu.map((item) => (
              <NavLink key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    )
  }
  return (
    <Container>
      <div className="content--container">
        <Link to="/" className="brand--logo">
          <AppLogo />
        </Link>
        <nav>
          {menus.map((item) => menuList(item))}
          <Button onClick={() => history.push(AppRoutes.contactUs)}>
            Contact us <FiArrowRight />
          </Button>
        </nav>
      </div>
    </Container>
  )
}

export default TopNav
