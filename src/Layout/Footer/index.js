import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { AppRoutes, contacts } from '../../constants'
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
                <a
                  href={item.link}
                  target="__blank"
                  rel="noreferrer"
                  key={uuid()}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid--item">
          <h2>About Ydev</h2>
          <nav>
            <NavLink to={AppRoutes.aboutUs.studentStories}>About Us</NavLink>
            <NavLink to={AppRoutes.contactUs}>Contact Us</NavLink>
            <NavLink to={AppRoutes.aboutUs.studentStories}>
              Student Stories
            </NavLink>
            <NavLink to={AppRoutes.aboutUs.events}>Events</NavLink>
            <NavLink to={AppRoutes.aboutUs.faq}>FAQs</NavLink>
            <a href={contacts.blogLink} target={'_blank'} rel="noreferrer">
              Blogs
            </a>
          </nav>
        </div>
        <div className="grid--item">
          <h2>Our Programs</h2>
          <nav>
            {[
              { title: 'Design School', link: AppRoutes.programs.designSchool },
              {
                title: 'Software School',
                link: AppRoutes.programs.softwareSchool,
              },
              { title: 'Data School', link: AppRoutes.programs.dataSchool },
              {
                title: 'Product School',
                link: AppRoutes.programs.productSchool,
              },
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
            ].map((item) => (
              <NavLink key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="grid--item">
          <h2>Enterprise</h2>
          <nav>
            {[
              {
                title: 'Corporate Training',
                link: AppRoutes.enterprise.corportateTraining,
              },
              {
                title: 'Hire Our Alumni',
                link: AppRoutes.enterprise.hireOurAlumni,
              },
              { title: 'Higher Education', link: AppRoutes.enterprise.hiredEd },
            ].map((item) => (
              <NavLink key={item.title} to={item.link}>
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <footer>
        <p>
          Copyright ©{new Date().getFullYear()} Ydev Academy. All Rights
          Reserved. The Ydev word mark is a registered trademark of Harbor
          Incubator Technology Limited.{' '}
        </p>
        <nav>
          <NavLink to={AppRoutes.termsandagreement}>
            Terms and agreement
          </NavLink>
        </nav>
      </footer>
    </Container>
  )
}

export default Footer
