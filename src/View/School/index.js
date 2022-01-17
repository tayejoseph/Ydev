import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Switch, message } from 'antd'
import { TitleWithDesign } from '../../component'
import { SchoolsLists, AppRoutes } from '../../constants'
import {
  ReadingGuy,
  Barchart,
  PaperPen,
  Checked,
  StarChecked,
  Lists,
} from '../../assets/convertedSvgs'
import { applyForSchool } from '../../redux/actions'
import { formValidator } from '../../helpers'
import { Button, InputGroup } from '../../UI'
import ApplicationModal from './ApplicationModal'
import Container from './styles'

const School = () => {
  const {
    params: { schoolName },
  } = useRouteMatch()
  const {
    jumbotron,
    secondContent,
    thirdContent,
    downloadLink,
    fourthContent,
    program,
  } = SchoolsLists[schoolName]

  const [showModal, setDisplay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    program: '',
  })

  const handleInput = ({ target: { value, name } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const scrollToLearnMore = (id) => {
    const dom = document.getElementById('learnMore')
    if (dom) {
      window.scrollTo({
        top: dom.offsetTop - 100,
        behavior: 'smooth',
      })
    }
  }

  const downloadCurriculum = () => {
    window.open(downloadLink)
  }

  const handleSubmit = async (payment = {}) => {
    setLoading(true)
    return await applyForSchool({
      ...formData,
      program,
      payment: false,
      transaction_reference: null,
      ...payment,
    })
      .then((response) => {
        setLoading(false)
        if (response) {
          message.success('Successfully submitted data!')
          setDisplay(false)
          return { success: true }
        }
        return
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const handleProceed = () => {
    if (
      formValidator(
        document.forms['school--form'].getElementsByTagName('input'),
      )
    ) {
      setDisplay(true)
    }
  }

  return (
    <>
      <ApplicationModal
        {...{
          showModal,
          formData,
          jumbotron,
          handleSubmit,
          loading,
          handleHide: () => setDisplay(false),
        }}
      />
      <Container>
        <section className="section--jumbotron">
          <div className="col--1">
            <h1>{jumbotron.title}</h1>
            <p>{jumbotron.details}</p>
            <ol>
              {jumbotron.lists.map((item) => (
                <li key={item}>
                  <Checked />
                  {item}
                </li>
              ))}
            </ol>
            <Button
              onClick={() => {
                scrollToLearnMore()
              }}
            >
              Apply now
            </Button>
          </div>
          <div className="col--2">
            <StarChecked />
          </div>
        </section>
        <section className="section--timeline">
          <div className="col--1">
            <TitleWithDesign title={secondContent.title} />
            <div className="detail--container">{secondContent.details}</div>
          </div>
          <div className="col--2">
            <h1>{secondContent.timeLine}</h1>
            <Button onClick={downloadCurriculum}>Download Curriculum</Button>
          </div>
        </section>
        <section className="section--why">
          <h1 className="u--typo__title2">{thirdContent.title}</h1>
          {thirdContent.details.map((item) => (
            <div className="detail--item">
              <h2>{item.title}</h2>
              <p>{item.details}</p>
            </div>
          ))}
        </section>
        <section className="section--training">
          <header className="training--header">
            <h1 className="u--typo__title2">{fourthContent.title}</h1>
            <p>{fourthContent.description}</p>
            <Button onClick={downloadCurriculum}>
              Download Full Curriculum
            </Button>
          </header>
          <div className="lists--container">
            {fourthContent.details.map((item) => (
              <div className="list--item">
                <header>
                  <h2>{item.title}</h2>
                  <h2>{item.details}</h2>
                </header>
                <ol>
                  {item.lists.map((list) => (
                    <li key={list}>
                      <span>📌</span> {list}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
        <section className="section--admission">
          <header>
            <h1 className="u--typo__title2">Our admissions process</h1>
            <p>Start your journey with these steps</p>
          </header>
          <div className="grid--container">
            <div className="grid--item">
              <hgroup>
                <div>
                  <h1>01</h1>
                  <Barchart />
                </div>
                <h1 className="title">Sign Up</h1>
              </hgroup>
              <p>
                Select your desired course, fill our form and get registered
              </p>
            </div>
            <div className="grid--item">
              <hgroup>
                <div>
                  <h1>02</h1>
                  <PaperPen />
                </div>
                <h1 className="title">Make payment</h1>
              </hgroup>
              <p>
                Complete payment to confirm your registration status for the
                cohort.
              </p>
            </div>
            <div className="grid--item">
              <hgroup>
                <div>
                  <h1>03</h1>
                  <Lists />
                </div>
                <h1 className="title">Start learning</h1>
              </hgroup>
              <p>
                Get added to our slack channel, receive our course curriculum,
                timetable and start learning.
              </p>
            </div>
          </div>
        </section>

        <section className="section--learnMore" id="learnMore">
          <div className="col--1">
            <h1>
              Learn more about our {jumbotron.title.toLowerCase()} and how to
              take your first step!
            </h1>
            <form
              noValidate
              name="school--form"
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              <InputGroup
                label="Full Name"
                onChange={handleInput}
                required
                name="full_name"
                value={formData.full_name}
                data-label="Full Name"
                hasRequired={true}
              />
              <InputGroup
                label="Email"
                name="email"
                value={formData.email}
                type="email"
                onChange={handleInput}
                required
                data-label={'Email'}
                hasRequired={true}
              />
              <InputGroup
                label="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                type="tel"
                onChange={handleInput}
                required
                data-label={'Phone number'}
                hasRequired={true}
              />
              <footer>
                <div className="footer--row">
                  <Switch defaultChecked onChange={console.log} />
                  <p>
                    By selecting this, you agree to Ydev{' '}
                    <Link to={AppRoutes.termsandagreement}>Terms</Link> and{' '}
                    <Link to={AppRoutes.privacypolicy}>Privacy Policy</Link>
                  </p>
                </div>
                <div className="action--container">
                  <Button onClick={handleProceed}>Proceed</Button>
                  <Button
                    secondary
                    disabled={loading}
                    onClick={downloadCurriculum}
                  >
                    Download Syllabus
                  </Button>
                </div>
              </footer>
            </form>
          </div>
          <div className="col--2">
            <ReadingGuy />
          </div>
        </section>
      </Container>
    </>
  )
}

export default School
