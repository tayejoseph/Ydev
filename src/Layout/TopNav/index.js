import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { Button } from '../../UI'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const TopNav = () => {
  return (
    <Container>
      <div className="content--container">
        <Link to="/" className="brand--logo">
          <AppLogo />
        </Link>
        <nav>
          <NavLink to="/">Programs</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Enterprise</NavLink>
          <NavLink to="/">Careers</NavLink>
          <Button>
            Contact us <FiArrowRight />
          </Button>
        </nav>
      </div>
    </Container>
  )
}

export default TopNav
