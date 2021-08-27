import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { BREAKPOINTS } from '../../base/theme'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const TopNav = () => {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.lg })
  return isMobile ? <MobileNav /> : <DesktopNav />
}

export default TopNav
