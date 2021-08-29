import mixins from './mixins'

const dimensions = {
  navHeight: '6rem',
  navHeightMobile: '5rem',
  maxWidth: '1100px',
  adminTopNavHeight: '4.5rem',
  footerHeight: '3.5rem',
}

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const theme = () => ({
  primary: '#188DAF',
  bgColor: '#fff',
  textColor: '#050402;',
  mixins,
  dimensions,
  fontFamily: 'Poppins',
  secondary: '#051A26',
})

export default theme
