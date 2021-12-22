import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Parteners, TitleWithDesign, ReachUs } from '../../component'
import { coperateTraining } from '../../assets/svgImgs'
import { formValidator } from '../../helpers'
import { applyForCoprateTraining } from '../../redux/actions'
import { Cusion, FormIllustration } from '../../assets/convertedSvgs'
import { Button, InputGroup } from '../../UI'
import { AppRoutes, corporateTrainingContent } from '../../constants'
import Container from './styles'

const CorperateTraining = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    company_url: '',
    phone_number: '',
    how_can_we_help: '',
  })

  const scrollToForm = () => {
    const dom = document.getElementById('form')
    window.scrollTo({
      top: dom.offsetTop - 180,
      behavior: 'smooth',
    })
  }
  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = () => {
    try {
      if (
        formValidator([
          ...document.forms['corporate-training'].getElementsByTagName('input'),
          ...document.forms['corporate-training'].getElementsByTagName(
            'textarea',
          ),
        ])
      ) {
        setLoading(true)
        applyForCoprateTraining({
          ...formData,
        })
          .then((response) => {
            message.success('Successfully applied!')
            setLoading(false)
          })
          .finally(() => {
            setLoading(false)
          })
      }
    } catch (response) {
      setLoading(false)
    }
  }
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
                <button onClick={() => history.push('?popup=schedule')}>
                  Schedule consultation
                </button>
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
        <Parteners title={'Our Partners'} />
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
          <Button onClick={() => scrollToForm()}>Apply now</Button>
        </div>
      </section>
      <section className="section--ready" id={'form'}>
        <h1>Ready to Empower your WorkForce?</h1>
        <div className="section--row">
          <div className="col--1">
            <form
              noValidate
              name="corporate-training"
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              <InputGroup
                label="Full Name"
                required={true}
                name="full_name"
                hasRequired
                data-label="Full name"
                value={formData.full_name}
                onChange={handleInput}
              />
              <InputGroup
                label="Email"
                required={true}
                hasRequired
                name="email"
                value={formData.email}
                type="email"
                data-label="Email"
                onChange={handleInput}
              />
              <InputGroup
                label="Company Name"
                required={true}
                hasRequired
                value={formData.company_name}
                name="company_name"
                data-label={'Company name'}
                onChange={handleInput}
              />
              <InputGroup
                label="Company Website Url"
                name="company_url"
                type="url"
                data-label={'Company Url'}
                required
                value={formData.company_url}
                onChange={handleInput}
              />
              <InputGroup
                label="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                type="tel"
                data-label={'Phone Number'}
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
                data-label={'How can we help'}
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
