import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CompanySponsors, TitleWithDesign, ReachUs } from '../../component'
import { contactSection } from '../../assets/svgImgs'
import { Button, InputGroup } from '../../UI'
import { AppRoutes, corporateTrainingContent } from '../../constants'
import Container from './styles'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNo: '',
    subject: '',
    message: '',
  })

  const handleInput = ({ name, value }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = () => {}
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
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <div className="item--row">
            <InputGroup
              label="First name"
              name="firstname"
              required
              onChange={handleInput}
              value={formData.firstname}
            />
            <InputGroup
              label="Last name"
              name="lastname"
              required
              onChange={handleInput}
              value={formData.lastname}
            />
          </div>
          <InputGroup
            label="Email address"
            type="email"
            value={formData.email}
            name="email"
            onChange={handleInput}
            required={true}
          />
          <InputGroup
            type="tel"
            name="phoneNo"
            label="Phone number"
            onChange={handleInput}
          />
          <InputGroup
            label="Subject"
            onChange={handleInput}
            name="subject"
            value={formData.subject}
          />
          <InputGroup>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInput}
            />
          </InputGroup>
          <footer>
            <p>
              By selecting this, you agree to Ydev{' '}
              <Link to={AppRoutes.termsandcondition}>Terms</Link> and{' '}
              <Link to={AppRoutes.privacyPolicy}>Privacy Policy</Link>
            </p>
            <Button full type="submit">
              Send Message
            </Button>
          </footer>
        </form>
        <section className="section--footer">
          <h1>We Love to Hear From You</h1>
          <div className="grid--container">
            <div className="grid--item">
              <h2>Our office</h2>
              <p>1A Hughes Ave, Yaba, Lagos State</p>
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
                <a href="tel:+234 816 662 6000">+234 816 662 6000</a>
                <br />
                <a href="mailto:info@ydev.academy">info@ydev.academy</a>
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
