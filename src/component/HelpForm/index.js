import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Switch } from 'antd'
import { Button, InputGroup } from '../../UI'
import { AppRoutes } from '../../constants'
import Container from './styles'

const HelpForm = () => {
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
          label="Email"
          required={true}
          hasRequired
          name="email"
          value={formData.email}
          type="email"
          onChange={handleInput}
        />
        <InputGroup
          label="Company Name"
          required={true}
          hasRequired
          value={formData.companyName}
          name="companyName"
          onChange={handleInput}
        />
        <InputGroup
          label="Company Website Url"
          name="companyUrl"
          type="url"
          value={formData.companyNameUrl}
          onChange={handleInput}
        />
        <InputGroup
          label="Your Role"
          name="role"
          onChange={handleInput}
          value={formData.role}
        />
        <InputGroup
          label="Phone Number"
          name="phoneNo"
          value={formData.phoneNo}
          type="tel"
          onChange={handleInput}
        />
        <InputGroup
          label="How can we help you?"
          name="help"
          hasRequired
          required={true}
          type="textarea"
          onChange={handleInput}
          value={formData.help}
        />
        <footer>
          <p>
            {/* <Switch defaultChecked onChange={console.log} /> */}
            By selecting this, you agree to Ydev{' '}
            <Link to={AppRoutes.termsandcondition}> Terms</Link> and{' '}
            <Link to={AppRoutes.privacyPolicy}>Privacy Policy</Link>
          </p>
          <Button type="submit">Apply now</Button>
        </footer>
      </form>
    </Container>
  )
}

export default HelpForm
