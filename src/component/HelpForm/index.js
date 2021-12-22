import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { formValidator } from '../../helpers'
import { Button, InputGroup } from '../../UI'
import { becomeMentor } from '../../redux/actions'
import { AppRoutes } from '../../constants'
import Container from './styles'

const HelpForm = ({ api }) => {
  const [loading, setLoading] = useState(false)

  const [formData, setFormDate] = useState({
    full_name: '',
    email: '',
    company_name: '',
    company_url: '',
    phone_number: '',
    how_can_we_help: '',
  })
  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = () => {
    if (
      formValidator([
        ...document.forms['form-workforce'].getElementsByTagName('input'),
        ...document.forms['form-workforce'].getElementsByTagName('textarea'),
      ])
    ) {
      try {
        setLoading(true)

        const action = api ? api : becomeMentor
        action(formData)
          .then((response) => {
            if (response) {
              message.success('Successfully submitted response')
            }
          })
          .finally(() => {
            setLoading(false)
          })
      } catch {
        setLoading(false)
      }
    }
  }
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
          name="full_name"
          data-label="Full name"
          hasRequired
          value={formData.full_name}
          onChange={handleInput}
        />
        <InputGroup
          label="Email"
          required={true}
          hasRequired
          name="email"
          data-label="Email"
          value={formData.email}
          type="email"
          onChange={handleInput}
        />
        <InputGroup
          label="Company Name"
          required={true}
          hasRequired
          data-label="Company name"
          value={formData.company_name}
          name="company_name"
          onChange={handleInput}
        />
        <InputGroup
          label="Company Website Url"
          name="company_url"
          type="url"
          data-label="Company Url"
          value={formData.company_url}
          onChange={handleInput}
        />
        <InputGroup
          label="Phone Number"
          name="phone_number"
          data-label="Phone number"
          value={formData.phone_number}
          type="tel"
          required
          onChange={handleInput}
        />
        <InputGroup
          label="How can we help you?"
          name="how_can_we_help"
          hasRequired
          required={true}
          type="textarea"
          onChange={handleInput}
          value={formData.how_can_we_help}
        />
        <footer>
          <p>
            By selecting this, you agree to Ydev{' '}
            <Link to={AppRoutes.termsandcondition}> Terms</Link> and{' '}
            <Link to={AppRoutes.privacypolicy}>Privacy Policy</Link>
          </p>
          <Button type="submit" loading={loading} spinnerWithTxt>
            Apply now
          </Button>
        </footer>
      </form>
    </Container>
  )
}

export default HelpForm
