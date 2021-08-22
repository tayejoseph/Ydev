import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { Congrats } from '../../assets/LottieAnimations'
import { Button } from '../../../UI'
import Container from './styles'

const SuccessView = () => {
  return (
    <Container>
      <Player
        autoplay
        loop
        src={Congrats}
        style={{ height: '10rem', width: '10rem' }}
      />
      <h2>Hello Seyi, your response has been submitted</h2>
      <p>We'll be in touch with next steps.</p>
      <Button>Back to job openings</Button>
    </Container>
  )
}

export default SuccessView
