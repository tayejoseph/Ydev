import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from '../../../UI'
import { AppRoutes } from '../../../constants'
import { AppLogo } from '../../../assets/convertedSvgs'
import Container from './styles'

const TopNav = () => {
  const history = useHistory()
  const [showMenu, setDisplay] = useState(false)

  const handleToggleMenu = (e) => {
    e.stopPropagation()
    const attribute = e.target.getAttribute('data-menu')
    setDisplay(showMenu === attribute ? null : attribute)
  }

  useEffect(() => {
    const handleClickEvent = () => {
      setDisplay(false)
    }
    document.addEventListener('click', handleClickEvent)
    return () => {
      document.removeEventListener('click', handleClickEvent)
    }
  }, [])

  return (
    <Container>
      <div className="content--container">
        <Link to="/" className="brand--logo">
          <AppLogo />
        </Link>
        <nav>
          <div
            className={`menu--container ${
              showMenu === 'programs' ? 'active--nav' : ''
            }`}
          >
            <button
              className="menu--item"
              data-menu={'programs'}
              onClick={handleToggleMenu}
            >
              Programs
              <span>
                <MdKeyboardArrowDown />
              </span>
            </button>
            <div className="menu--lists">
              <Link to={AppRoutes.schools.dataSchool}>Data School</Link>
              <Link to={AppRoutes.schools.designSchool}>Design School</Link>
              <Link to={AppRoutes.schools.productSchool}>Product School</Link>
              <Link to={AppRoutes.schools.devOpsSchool}>DevOps School</Link>
              <Link to={AppRoutes.schools.softwareSchool}>Software School</Link>
              <Link to={AppRoutes.schools.qaSchool}>QA School</Link>
              <Link to={AppRoutes.schools.engineeringSchool}>
                Engineering School
              </Link>
            </div>
          </div>
          <div
            className={`menu--container ${
              showMenu === 'about' ? 'active--nav' : ''
            }`}
          >
            <button
              className="menu--item"
              data-menu={'about'}
              onClick={handleToggleMenu}
            >
              About
              <span>
                <MdKeyboardArrowDown />
              </span>
            </button>
            <div className="menu--lists">
              <Link to={AppRoutes.aboutUs.ourStory}>Our Story</Link>
              <Link to={AppRoutes.aboutUs.studentStories}>Student Stories</Link>
              <Link to={AppRoutes.events}>Events</Link>
              <Link to={AppRoutes.faq}>FAQs</Link>
            </div>
          </div>
          <div
            className={`menu--container ${
              showMenu === 'enterprise' ? 'active--nav' : ''
            }`}
          >
            <button
              className="menu--item"
              data-menu={'enterprise'}
              onClick={handleToggleMenu}
            >
              Enterprise
              <span>
                <MdKeyboardArrowDown />
              </span>
            </button>
            <div className="menu--lists">
              <Link to={AppRoutes.enterprise.corporateTraining}>
                Corporate Training
              </Link>
              <Link to={AppRoutes.enterprise.hireAlumni}>Hire Our Alumni</Link>
            </div>
          </div>
          <div
            className={`menu--container ${
              showMenu === 'careers' ? 'active--nav' : ''
            }`}
          >
            <button
              className="menu--item"
              data-menu={'careers'}
              onClick={handleToggleMenu}
            >
              Careers
              <span>
                <MdKeyboardArrowDown />
              </span>
            </button>
            <div className="menu--lists">
              <Link to={AppRoutes.becomeAnInstructor}>
                Become An Instructor
                {/* - Job Details */}
              </Link>
              <Link to={AppRoutes.becomeAmentor}>Become A Mentor</Link>
            </div>
          </div>
          <Button
            className="contact--btn"
            onClick={() => history.push(AppRoutes.contactUs)}
          >
            Contact us <FiArrowRight />
          </Button>
        </nav>
      </div>
    </Container>
  )
}

export default TopNav
