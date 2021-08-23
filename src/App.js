import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { TopNav, Footer } from './Layout'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'styled-components'
import {
  Home,
  FAQ,
  TermAndConditions,
  HireAlumni,
  Curriculum,
  PrivacyPolicy,
  Events,
  OurStories,
  StudentStories,
  ContactUs,
  CorperateTraining,
  BecomeAMentor,
  JobDetails,
  BecomeAnInstructor,
} from './View'
import { AppRoutes } from './constants'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

const App = () => {
  const location = useLocation()
  let background = location.state && location.state.background

  return (
    <ThemeProvider theme={{ ...theme() }}>
      <GlobalStyle />
      <IconContext.Provider value={{ className: 'icon' }}>
        <TopNav {...{ location }} />
        <div className="app--content">
          <Switch location={background || location}>
            <Route path="/" exact={true}>
              <Redirect to={AppRoutes.home} />
            </Route>
            <Route path={AppRoutes.home} component={Home} />
            <Route path={AppRoutes.faq} component={FAQ} />
            <Route
              path={AppRoutes.termsandagreement}
              component={TermAndConditions}
            />
            <Route path={AppRoutes.privacypolicy} component={PrivacyPolicy} />
            <Route path={AppRoutes.curriculum} component={Curriculum} />
            <Route
              path={AppRoutes.aboutUs.studentStories}
              component={StudentStories}
            />
            <Route path={AppRoutes.aboutUs.ourStory} component={OurStories} />
            <Route path={AppRoutes.events} component={Events} />
            <Route path={AppRoutes.contactUs} component={ContactUs} />
            <Route path={AppRoutes.becomeAmentor} component={BecomeAMentor} />
            <Route
              path={AppRoutes.becomeAnInstructor}
              component={BecomeAnInstructor}
            />
            <Route path={AppRoutes.jobDetails} component={JobDetails} />

            <Route
              path={AppRoutes.enterprise.hireAlumni}
              component={HireAlumni}
            />
            <Route
              path={AppRoutes.enterprise.corporateTraining}
              component={CorperateTraining}
            />
            {/* <Route path={AppRoutes.hireGraduates} component={} /> */}
          </Switch>
        </div>
        <Footer />
        <ScrollToTop />
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
