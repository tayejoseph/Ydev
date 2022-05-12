import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { TopNav, Footer } from './Layout'
import { IconContext } from 'react-icons'
import { useDispatch } from 'react-redux'
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
  HireEducation,
  School,
} from './View'
import { getEvents, getJobOpenings } from './redux/actions'
import { Apply, Hire, Schedule } from './popup'
import { AppRoutes } from './constants'
import { useQuery } from './hooks'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'
import ReactGA from 'react-ga'

const TRACKING_ID = "G-Y37R99HCVG"
ReactGA.initialize(TRACKING_ID)


const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

const App = () => {
  const dispatch = useDispatch()
  const popup = useQuery().get('popup')
  const location = useLocation()
  let background = location.state && location.state.background

  useEffect(() => {
    dispatch(getEvents())
    dispatch(getJobOpenings())
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [dispatch])

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
            <Route path={AppRoutes.aboutUs.faq} component={FAQ} />
            <Route
              path={AppRoutes.termsandagreement}
              component={TermAndConditions}
            />
            <Route path={AppRoutes.privacypolicy} component={PrivacyPolicy} />

            {/* Enterprise */}
            <Route
              path={AppRoutes.enterprise.corportateTraining}
              component={CorperateTraining}
            />
            <Route
              path={AppRoutes.enterprise.hireOurAlumni}
              component={HireAlumni}
            />
            <Route
              path={AppRoutes.enterprise.hiredEd}
              component={HireEducation}
            />

            <Route path={AppRoutes.curriculum} component={Curriculum} />
            <Route
              path={AppRoutes.aboutUs.studentStories}
              component={StudentStories}
            />
            <Route path={AppRoutes.aboutUs.ourStory} component={OurStories} />
            <Route path={AppRoutes.aboutUs.events} component={Events} />
            <Route path={AppRoutes.contactUs} component={ContactUs} />
            <Route path={AppRoutes.career.mentor} component={BecomeAMentor} />
            <Route
              path={AppRoutes.career.instructor}
              component={BecomeAnInstructor}
            />
            <Route
              path={`${AppRoutes.jobDetails}/:id`}
              component={JobDetails}
            />

            <Route
              path={`${AppRoutes.programs.initial}/:schoolName`}
              component={School}
            />
            {/* <Route path={AppRoutes.hireGraduates} component={} /> */}
          </Switch>
          {popup === 'apply' && <Apply />}
          {popup === 'hire' && <Hire />}
          {popup === 'schedule' && <Schedule />}
        </div>
        <Footer />
        <ScrollToTop />
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
