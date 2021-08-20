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
  AboutUs,
  PrivacyPolicy,
  Events,
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
            <Route path={AppRoutes.hireAlumni} component={HireAlumni} />
            <Route path={AppRoutes.curriculum} component={Curriculum} />
            <Route
              path={AppRoutes.aboutUs.studentStories}
              component={AboutUs}
            />
            <Route path={AppRoutes.events} component={Events} />
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
