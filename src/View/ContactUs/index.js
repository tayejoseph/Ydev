import React, { useState } from 'react'
import { message } from 'antd'
import { Link } from 'react-router-dom'
import { formValidator } from '../../helpers'
import { TitleWithDesign } from '../../component'
import { Button, InputGroup } from '../../UI'
import { getInTouch } from '../../redux/actions'
import { AppRoutes, contacts } from '../../constants'
import Container from './styles'
import useAnalyticsEventTracker from '../../analytics/useAnalyticsEventTracker'

const ContactUs = () => {
  const gaEventTracker = useAnalyticsEventTracker('Contact Us')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  })

  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    if (
      formValidator([
        ...document.forms['contact--form'].getElementsByTagName('input'),
        ...document.forms['contact--form'].getElementsByTagName('textarea'),
      ])
    ) {
      try {
        setLoading(true)
        getInTouch(formData).then((response) => {
          if (response) {
            message.success('We will be in touch')
          }
          setLoading(false)
          console.log(response, 'response')
        })
      } catch {
        setLoading(false)
      }
    }
  }

  return (
    <Container>
      <div className="col--1">
        <header>
          <TitleWithDesign title="Get in touch" />
          <p>
            We’d love to hear from you! Send us a message using the form, or
            email us. We’d love to hear from you!{' '}
          </p>
        </header>
        <form
          noValidate
          name="contact--form"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <div className="item--row">
            <InputGroup
              label="First name"
              name="first_name"
              required
              onChange={handleInput}
              data-label={'First name'}
              value={formData.first_name}
            />
            <InputGroup
              label="Last name"
              name="last_name"
              required
              data-label={'Last name'}
              onChange={handleInput}
              value={formData.last_name}
            />
          </div>
          <InputGroup
            label="Email address"
            type="email"
            value={formData.email}
            name="email"
            data-label={'Email'}
            onChange={handleInput}
            required={true}
          />
          <InputGroup
            type="tel"
            name="phone_number"
            label="Phone number"
            data-label={'Phone number'}
            value={formData.phone_number}
            onChange={handleInput}
          />
          <InputGroup
            label="Subject"
            onChange={handleInput}
            name="subject"
            required
            data-label="Subject"
            value={formData.subject}
          />
          <InputGroup
            label="Message"
            name="message"
            type="textarea"
            data-label="Message"
            value={formData.message}
            onChange={handleInput}
          />
          <footer>
            <p>
              By selecting this, you agree to Ydev{' '}
              <Link to={AppRoutes.termsandcondition}>Terms</Link> and{' '}
              <Link to={AppRoutes.privacyPolicy}>Privacy Policy</Link>
            </p>
            <Button loading={loading} spinnerWithTxt full type="submit" onClick={()=>gaEventTracker('contactUsButton')}>
              Send Message
            </Button>
          </footer>
        </form>
        <section className="section--footer">
          <h1>We Love to Hear From You</h1>
          <div className="grid--container">
            <div className="grid--item">
              <h2>Our office</h2>
              <p>{contacts.address}</p>
            </div>
            <div className="grid--item">
              <h2>Our business hours</h2>
              <div>
                <h3>Monday – Friday:</h3>
                <p>8am – 4pm</p>
              </div>
              <div>
                <h3>Saturday, Sunday:</h3>
                <p>9am – 5pm</p>
              </div>
            </div>
            <div className="grid--item">
              <h2>Contact Information</h2>
              <p>
                <a href={`tel:+${contacts.phoneNo}`}>{contacts.phoneNo}</a>
                <br />
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="col--2"></div>
    </Container>
  )
}

export default ContactUs
