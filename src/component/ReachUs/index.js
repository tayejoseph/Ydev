import React from 'react'
import { contacts } from '../../constants'
import { AppLogo } from '../../assets/convertedSvgs'
import { Button } from '../../UI'
import { reachUs } from '../../assets/svgImgs'
import Container from './styles'

const ReachUs = ({ withBackDrop = false }) => {
  return (
    <Container withBackDrop={withBackDrop}>
      <div className="col--1">
        <div className="content--container">
          <AppLogo />
          <h1>You can reach us here</h1>
          <p>
            Because we know that even the best service is only as good as the
            people behind it. That’s why we offer expert, 24/7 phone support.
          </p>
          <div className="btn--group">
            <Button
              onClick={() => {
                window.open(`tel:${contacts.phoneNo}`)
              }}
            >
              Call us here
            </Button>
            <Button
              secondary
              onClick={() => {
                window.open(
                  `mailto:${contacts.email}`,
                  '_blank', // <- This is what makes it open in a new window.
                )
              }}
            >
              Send an email
            </Button>
          </div>
        </div>
      </div>
      <div className="col--2">
        <img src={reachUs} alt="reach us" />
      </div>
    </Container>
  )
}

export default ReachUs
