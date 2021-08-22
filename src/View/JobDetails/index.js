import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '../../hooks'
import { ReachUs } from '../../component'
import { formValidator } from '../../helpers'
import { JobOverview } from '../../assets/convertedSvgs'
import { Button, InputGroup } from '../../UI'
import SuccessView from './SuccessView'
import { AppRoutes } from '../../constants'
import Container from './styles'

const BecomeAMentor = () => {
  const form = useQuery().get('form')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    role: '',
    linkedInUrl: '',
    profileUrl: '',
  })
  const handleInput = ({ name, value }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    if (
      formValidator(document.forms['apply--form'].getElementsByTagName('input'))
    ) {
      try {
        setLoading(true)
      } catch {
        setLoading(false)
      }
    }
  }
  return form === 'success' ? (
    <SuccessView />
  ) : (
    <Container>
      <section className="section--jumbotron">
        <h1>Product Marketing Associate</h1>
        <Button>Apply now</Button>
      </section>
      <section className="section--world">
        <h1>About this role</h1>
        <p>
          We are looking for Product Marketing Associate who will be part of the
          Marketing team to assist in developing and implementing successful,
          long-term marketing strategies for our products. You will be
          responsible for presenting our products in ways that will strengthen
          our brand and boost growth.
        </p>
        <br />
        <p>
          Product Marketing Associate: The product marketer will be responsible
          for smooth execution of omni-channel marketing strategies for Ydev
          Academy. S/he will be responsible for ideating, and developing an
          omni-channel marketing strategy to communicate features and
          initiatives that Ydev has built to its user base coordinating with
          internal stakeholders. (design and copywriting teams)
        </p>
        <h1>Preferred experience</h1>
        <ul>
          <li>1 to 2 years of experience in a similar role</li>
          <li>
            Experience in a startup or entrepreneurial venture in the education
            space is not compulsory but would be a big plus
          </li>
        </ul>
        <h1>Roles & responsibilities</h1>
        <ul>
          <li>
            Work with the product, marketing and design teams to build a
            framework for targeting, acquiring, educating and nurturing the user
            base
          </li>
          <li>
            Driving positioning & messaging through various campaigns to
            increase customer awareness of product using channels such as email,
            sms, web etc
          </li>
          <li>
            Driving product education through creation of customer collateral
            which include ebooks, case studies, guides, drip campaigns and blogs
          </li>
          <li>
            Develop appropriate metrics and reports to measure campaign
            performance and effectiveness based on product activation and
            adoption
          </li>
          <li>
            Ideating and building campaigns and execution through tools like
            Leadsquared, Webengage
          </li>
          <li>
            Driving growth by creating retention plans for cold leads and
            engagement plans for warm Leads - to guide them to product adoption
          </li>
        </ul>
        <h1>Required skills experience</h1>
        <ul>
          <li>1-2 years experience in omni-channel marketing management</li>
          <li>Prior experience with user retention, CRM and CLM</li>
          <li>Email marketing experience is a plus</li>
          <li>Strong written and verbal communication skills is mandatory</li>
          <li>
            The candidate should have good analytical and problem solving skills
          </li>
          <li>Excellent organizational skills</li>
        </ul>
        <h1>Job Overview</h1>
        <ul>
          <li>Location: Lagos</li>
          <li>Job Type: Full time</li>
          <li>Work: Office</li>
        </ul>
      </section>
      <section className="section--apply">
        <div className="col--1">
          <h1>Apply for this role</h1>
          <form
            name="apply--form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <InputGroup
              name="fullName"
              label={'Full Name'}
              onChange={handleInput}
              required
              hasRequired
              value={formData.fullName}
            />
            <InputGroup
              name="email"
              label={'Email'}
              type="email"
              onChange={handleInput}
              required
              hasRequired
              value={formData.email}
            />
            <InputGroup
              name="phoneNo"
              label={'Phone Number'}
              type="tel"
              onChange={handleInput}
              required
              hasRequired
              value={formData.phoneNo}
            />
            <InputGroup>
              <label className="required--label">
                What are the role you are applying for?
              </label>
              <select name="role" onChange={handleInput} value={formData.role}>
                <option>FrontEnd dev</option>
              </select>
            </InputGroup>
            <InputGroup>
              <label className="labelWithInstruction">
                Please upload your CV/Resume
                <span>PDF or Word format</span>
              </label>
            </InputGroup>
            <InputGroup
              label={'Please upload your Linkedin url'}
              type="url"
              name="linkedInUrl"
              value={formData.linkedInUrl}
              onChange={handleInput}
            />
            <InputGroup>
              <label className="labelWithInstruction">
                Portfolio link
                <span>Others</span>
              </label>
              <input
                type="url"
                onChange={handleInput}
                name="profileUrl"
                value={formData.profileUrl}
              />
            </InputGroup>
            <footer>
              <p>
                By selecting this, you agree to Ydev{' '}
                <Link to={AppRoutes.termsandcondition}>Terms</Link> and{' '}
                <Link to={AppRoutes.privacypolicy}>Privacy Policy</Link>
              </p>
              <Button loading={loading} type="submit">
                Apply now
              </Button>
            </footer>
          </form>
        </div>
        <div className="col--2">
          <JobOverview />
        </div>
      </section>
      <ReachUs withBackDrop={true} />
    </Container>
  )
}

export default BecomeAMentor
