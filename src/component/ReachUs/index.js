import React from 'react'
import { AppLogo } from '../../assets/convertedSvgs'
import { Button } from '../../UI'
import { reachUs } from '../../assets/svgImgs'
import Container from './styles'

const ReachUs = ({
  withBackDrop = false,
  title = 'You can reach us here',
  content = 'Because we know that even the best service is only as good as the people behind it. That’s why we offer expert, 24/7 phone support.',
}) => {
  return (
    <Container withBackDrop={withBackDrop}>
      <div className="col--1">
        <div className="content--container">
          <AppLogo />
          <h1>{title}</h1>
          <p>{content} </p>
          <div className="btn--group">
            <Button>Call us here</Button>
            <Button secondary>Send an email</Button>
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
