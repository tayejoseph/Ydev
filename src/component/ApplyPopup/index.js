import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { AppLogo } from '../../assets/convertedSvgs'
import 'react-phone-input-2/lib/style.css'
import { Button, InputGroup, Modal } from '../../UI'
import Container from './styles'

const ApplyPopup = () => {
  const [formData, setFormDate] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companyNameUrl: '',
    phoneNo: '',
    role: '',
    help: '',
  })
  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({ ...s, [name]: value }))
  }
  const handleSubmit = () => {}
  return (
    <Container>
      <Modal
        // modalTitle={'Hire The Best Technical Talents'}
        showModal={true}
        // modalFooter={
        //   <Button full secondary>
        //     Submit
        //   </Button>
        // }
      >
        <div className="apply--container">
          <header>
            <AppLogo />
          </header>
          <form
            noValidate
            name="form-workforce"
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <InputGroup
              label="Full Name"
              required={true}
              name="fullName"
              hasRequired
              value={formData.fullName}
              onChange={handleInput}
            />
            <InputGroup
              label="Email Address"
              required={true}
              hasRequired
              name="email"
              value={formData.email}
              type="email"
              onChange={handleInput}
            />
            <InputGroup className="phoneNo--container">
              <label>Phone Number</label>
              <PhoneInput
                country={'us'}
                value={formData.phoneNo}
                onChange={(phone) =>
                  setFormDate((s) => ({ ...s, phoneNo: phone }))
                }
              />
            </InputGroup>
            <footer>
              <Button>Sign Up</Button>
            </footer>
          </form>
        </div>
      </Modal>
    </Container>
  )
}

export default ApplyPopup
