import React, { useState, useRef } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useSelector } from 'react-redux'
import { Link, useRouteMatch, useHistory } from 'react-router-dom'
import { applyForJob } from '../../redux/actions'
import { storage } from '../../config'
import { useQuery } from '../../hooks'
import { ReachUs } from '../../component'
import { formValidator } from '../../helpers'
import { JobOverview } from '../../assets/convertedSvgs'
import { Button, InputGroup } from '../../UI'
import SuccessView from './SuccessView'
import { AppRoutes } from '../../constants'
import Container from './styles'

const initialState = {
  full_name: '',
  email: '',
  organization_name: 'string',
  role: '',
  phoneNo: '',
  resume: '',
  linkedlin_url: '',
  profile_url: '',
}
const BecomeAMentor = () => {
  const containerRef = useRef(null)
  const history = useHistory()
  const applyFormRef = useRef(null)
  const { jobOpenings } = useSelector((state) => state.AppReducer)
  const { id } = useRouteMatch().params
  const form = useQuery().get('form')

  const activeJobDetails = Object.keys(jobOpenings)
    .map((key) => jobOpenings[key])
    .find((item) => Number(item.id) === Number(id))

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    ...initialState,
    job_id: Number(id),
  })

  const handleInput = ({ target: { name, value } }) => {
    console.log({ name, value })
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    if (
      formValidator(document.forms['apply--form'].getElementsByTagName('input'))
    ) {
      const { resume, ...rest } = formData
      setLoading(true)

      const storageRef = ref(storage, resume.name)

      uploadBytes(storageRef, resume).then((snapshot) => {
        console.log(snapshot, 'snappppp')
        getDownloadURL(storageRef).then((downloadURL) => {
          applyForJob(activeJobDetails.id, {
            ...rest,
            resume: downloadURL,
          }).finally((response) => {
            setLoading(false)
            history.push('?form=success')
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          })
        })
      })
    }
  }

  return form === 'success' ? (
    <SuccessView
      {...{
        formData,
        handleClearState: () => {
          setFormData({ ...initialState, job_id: Number(id) })
        },
      }}
    />
  ) : (
    <Container ref={containerRef}>
      <section className="section--jumbotron">
        <h1>{activeJobDetails.title}</h1>
        <Button
          onClick={() => {
            applyFormRef.current.scrollIntoView({
              behavior: 'smooth',
            })
          }}
        >
          Apply now
        </Button>
      </section>
      <section className="section--world">
        {activeJobDetails.roles && activeJobDetails.roles.length > 0 && (
          <>
            <h1>About this role</h1>
            {activeJobDetails.roles.map((item) => (
              <p>{item.name}</p>
            ))}
          </>
        )}
        {activeJobDetails.skills && (
          <>
            <h1>Required skills and experience</h1>
            <ul>
              {activeJobDetails.skills.map((item) => (
                <p>{item.name}</p>
              ))}
            </ul>
          </>
        )}
        {activeJobDetails.responbilities && (
          <>
            <h1>Roles & responsibilities</h1>
            <ul>
              {activeJobDetails.responbilities.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </>
        )}
        <h1>Job Overview</h1>
        <ul>
          <li>Location: {activeJobDetails.location}</li>
          <li>Job Type: {activeJobDetails.job_type}</li>
        </ul>
      </section>
      <section className="section--apply" ref={applyFormRef}>
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
              name="full_name"
              label={'Full Name'}
              onChange={handleInput}
              data-label="Full name"
              required
              hasRequired
              value={formData.full_name}
            />
            <InputGroup
              name="email"
              label={'Email'}
              data-label="Email"
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
              data-label="Phone Number"
              onChange={handleInput}
              required
              hasRequired
              value={formData.phoneNo}
            />
            <InputGroup>
              <label
                htmlFor="fileInput"
                id="uploader"
                className="labelWithInstruction"
              >
                Please upload your CV/Resume
                <span>PDF or Word format</span>
                <input
                  id="fileInput"
                  type="file"
                  accept="application/msword, application/pdf"
                  name="resume"
                  onChange={({ target: { files } }) => {
                    setFormData((s) => ({
                      ...s,
                      resume: files[0],
                    }))
                  }}
                />
              </label>
            </InputGroup>
            {formData.resume && (
              <p className="file-preview">{formData.resume.name}</p>
            )}
            <InputGroup
              label={'Please upload your Linkedin url'}
              type="url"
              name="linkedlin_url"
              data-label="Linked Url"
              value={formData.linkedlin_url}
              onChange={handleInput}
            />
            <InputGroup
              label={<>Portfolio link</>}
              type="url"
              name="profile_url"
              data-label="Profile Url"
              value={formData.profile_url}
              onChange={handleInput}
            />
            <footer>
              <p>
                By selecting this, you agree to Ydev{' '}
                <Link to={AppRoutes.termsandcondition}>Terms</Link> and{' '}
                <Link to={AppRoutes.privacypolicy}>Privacy Policy</Link>
              </p>
              <Button spinnerWithTxt loading={loading} type="submit">
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
