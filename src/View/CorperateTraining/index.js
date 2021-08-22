import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CompanySponsors, TitleWithDesign, ReachUs } from '../../component'
import { coperateTraining } from '../../assets/svgImgs'
import { Cusion, FormIllustration } from '../../assets/convertedSvgs'
import { Button, InputGroup } from '../../UI'
import { AppRoutes, corporateTrainingContent } from '../../constants'
import Container from './styles'

const CorperateTraining = () => {
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
      <section className="section--jumbotron">
        <div className="section--row">
          <div className="col--1">
            <TitleWithDesign title="Get personalized corporate trainings with Ydev" />
          </div>
          <div className="col--2">
            <p>
              Our training is tailored to the needs of your team as we deliver
              customizable training solutions designed to transform your team.
            </p>
            <div className="row">
              <p>
                <Link to="/">Schedule consultation</Link>
              </p>
              <p>
                <Cusion />
                Request more info
              </p>
            </div>
          </div>
        </div>
        <div className="img--container">
          <img src={coperateTraining} alt="coperate training" />
        </div>
      </section>
      <section className="section--help">
        <h1>
          We <span className="u--color__primary">can help</span> you with
        </h1>
        <div className="grid--container">
          {corporateTrainingContent.help.map((item) => (
            <div className="grid--item">
              <div className="img--container">
                <img src={item.image} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section--choose">
        <h1>Why choose Ydev?</h1>
        <p>
          We are in partnership with over 200 businesses across different
          sectors to co-create our learning modules and content. We have vast
          knowledge and leading capabilities to deliver results in areas like
          Data Analytics, Product Development and Management, Product Design,
          Growth Hacking, Animation, and Software Development.
        </p>
      </section>
      <section className="section--patterns">
        <h1>Our partners</h1>
        <CompanySponsors />
      </section>
      <section className="section--workforce">
        <div className="col--1">
          <div className="img--container"></div>
        </div>
        <div className="col--2">
          <h1>Workforce digital transformation</h1>
          <p>
            Ydev has partnered with the most innovative companies in Africa for
            various workforce and talent transformation programs
          </p>
          <Button>Apply now</Button>
        </div>
      </section>
      <section className="section--ready">
        <h1>Ready to Empower your WorkForce?</h1>
        <div className="section--row">
          <div className="col--1">
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
                  By selecting this, you agree to Ydev{' '}
                  <Link to={AppRoutes.termsandcondition}> Terms</Link> and{' '}
                  <Link to={AppRoutes.privacypolicy}>Privacy Policy</Link>
                </p>
                <Button type="submit">Apply now</Button>
              </footer>
            </form>
          </div>
          <div className="col--2">
            <FormIllustration />
          </div>
        </div>
      </section>
      <ReachUs withBackDrop={true} />
    </Container>
  )
}

export default CorperateTraining
