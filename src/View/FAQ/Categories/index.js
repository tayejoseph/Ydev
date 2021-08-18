import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './styles'

const Categories = () => {
  return (
    <Container>
      <div className="nav--container">
        <h2>Categories</h2>
        <nav>
          <NavLink to="/">All questions</NavLink>
          <NavLink to="/">Students</NavLink>
          <NavLink to="/">Mentors</NavLink>
          <NavLink to="/">Instructors</NavLink>
          <NavLink to="/">Enterprise</NavLink>
        </nav>
      </div>
      <div className="content--container"></div>
    </Container>
  )
}

export default Categories
