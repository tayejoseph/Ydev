import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { footerContent } from '../../constants'
import { FooterAppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const Footer = () => {
  return (
    <Container>
      <div className="grid--container">
        <div className="grid--item">
          <header>
            <Link to="/">
              <FooterAppLogo />
            </Link>
          </header>
          <p>
            Fast track your tech career with a community that cares about your
            growth. Map your journey, get trained and join a community that
            supports you.
          </p>
          <div className="socials">
            <p>Connect with us</p>
            <div className="social--row">
              {footerContent.socials.map((item) => (
                <a href={item.link} key={item.key}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid--item">
          <h2>About Ydev</h2>
          <nav>
            <NavLink to={AppRoutes.aboutUs.ourStory}>About Us</NavLink>
            <NavLink to={AppRoutes.contactUs}>Contact Us</NavLink>
            <NavLink to={AppRoutes.aboutUs.studentStories}>
              Student Stories
            </NavLink>
            <NavLink to={AppRoutes.events}>Events</NavLink>
            <NavLink to={AppRoutes.resources}>Resources</NavLink>
            <NavLink to={AppRoutes.faq}>FAQs</NavLink>
            <NavLink to={AppRoutes.blog}>Blog</NavLink>
          </nav>
        </div>
        <div className="grid--item">
          <h2>Our Programs</h2>
          <nav>
            <NavLink to={AppRoutes.schools.dataSchool}>Data School</NavLink>
            <NavLink to={AppRoutes.schools.designSchool}>Design School</NavLink>
            <NavLink to={AppRoutes.schools.productSchool}>
              Product School
            </NavLink>
            <NavLink to={AppRoutes.schools.devOpsSchool}>DevOps School</NavLink>
            <NavLink to={AppRoutes.schools.softwareSchool}>
              Software School
            </NavLink>
            <NavLink to={AppRoutes.schools.qaSchool}>QA School</NavLink>
            <NavLink to={AppRoutes.schools.engineeringSchool}>
              Engineering School
            </NavLink>
          </nav>
        </div>
        <div className="grid--item">
          <h2>Enterprise</h2>
          <nav>
            <NavLink to={AppRoutes.hireGraduates}>Hire our graduate</NavLink>
            <NavLink to={AppRoutes.enterprise.corporateTraining}>
              Corporate training
            </NavLink>
          </nav>
        </div>
      </div>
      <footer>
        <hr />
        <div className="footer--grid">
          <p>
            Copyright ©2021 Ydev Academy. All Rights Reserved. The Ydev word
            mark is a registered trademark of Harbor Incubator Technology
            Limited.{' '}
          </p>
          <nav>
            <NavLink to="/">Cookies</NavLink>
            <NavLink to={AppRoutes.termsandagreement}>
              Terms and agreement
            </NavLink>
          </nav>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
