import React from 'react'
import { useHistory } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import { Congrats } from '../../../assets/LottieAnimations'
import { Button } from '../../../UI'
import Container from './styles'

const SuccessView = ({ formData, handleClearState }) => {
  const history = useHistory()
  return (
    <Container>
      <Player
        autoplay
        loop
        src={Congrats}
        style={{ height: '10rem', width: '10rem' }}
      />
      <h2>Hello {formData.full_name}, your response has been submitted</h2>
      <p>We'll be in touch with next steps.</p>
      <Button
        onClick={() => {
          handleClearState()
          history.goBack()
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      >
        Back to job openings
      </Button>
    </Container>
  )
}

export default SuccessView
