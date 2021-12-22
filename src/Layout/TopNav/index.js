import React, { useState } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useMediaQuery } from 'react-responsive'
import { BREAKPOINTS } from '../../base/theme'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { HiOutlineMenu } from 'react-icons/hi'
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
        link: AppRoutes.programs.qaSchool,
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
      { title: 'Higher Education', link: AppRoutes.enterprise.hiredEd },
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
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.xl })

  const [{ activePopup, showMenu }, setDisplay] = useState({
    activePopup: false,
    showMenu: false,
  })
  console.log({ activePopup, showMenu }, 'Props Now Props')

  const menuList = ({ link, title, menu }) => {
    return (
      <div
        className={`menu--container ${
          title === activePopup ? 'active--menu' : ''
        }`}
        onClick={(e) => {
          if (!isMobile) {
            setDisplay((s) => ({
              ...s,
              activePopup: title === s.activePopup ? false : title,
            }))
          }
        }}
      >
        <button
          type="button"
          className="btn--link"
          onClick={(e) => {
            e.stopPropagation()
            setDisplay((s) => ({
              ...s,
              activePopup: title === s.activePopup ? false : title,
            }))
          }}
        >
          {title}{' '}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </button>
        {activePopup === title && (
          <div className="menu--lists">
            {menu.map((item) => (
              <NavLink
                key={item.title}
                to={item.link}
                onClick={(e) => {
                  e.stopPropagation()
                  setDisplay({})
                }}
              >
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
      <div className="content--container nav--desktop">
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

      <div className="content--container nav--mobile">
        <div className="top--section">
          <Link to="/" className="brand--logo">
            <AppLogo />
          </Link>
          <button
            onClick={() => {
              setDisplay((s) => ({
                showMenu: !s.showMenu,
              }))
            }}
          >
            <HiOutlineMenu />
          </button>
        </div>
        <div
          className={`nav--cover ${showMenu ? 'display--menu' : 'hide--menu'}`}
          onClick={() => {
            if (isMobile) {
              setDisplay((s) => ({
                showMenu: !s.showMenu,
              }))
            }
          }}
        >
          <nav>
            {menus.map((item) => menuList(item))}
            <Button
              className="contact--btn"
              onClick={() => history.push(AppRoutes.contactUs)}
            >
              Contact us <FiArrowRight />
            </Button>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default TopNav
