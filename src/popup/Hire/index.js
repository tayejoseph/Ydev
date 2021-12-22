import React, { useState } from 'react'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { Modal, InputGroup, Button } from '../../UI'
import { formValidator } from '../../helpers'
import { hireAlumini } from '../../redux/actions'
import Container from './styles'

const Apply = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [isOthersActive, setState] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    organization_name: '',
    support_info: [],
    otherSupport: '',
  })

  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSupport = ({ target: { checked, value } }) => {
    if (value === 'Others') {
      setState(checked)
    } else {
      setFormData((s) => ({
        ...s,
        support_info: checked
          ? [...s.support_info, value]
          : s.support_info.filter((item) => item !== value),
      }))
    }
  }

  const handleSubmit = () => {
    if (
      formValidator(document.forms['hire--form'].getElementsByTagName('input'))
    ) {
      const { otherSupport, support_info, ...rest } = formData
      setLoading(true)
      hireAlumini({
        ...rest,
        support_info:
          isOthersActive && otherSupport
            ? JSON.stringify([...support_info, otherSupport])
            : JSON.stringify(support_info),
      })
        .then((response) => {
          if (response) {
            message.success('Successfully submited form')
            setLoading(false)
            setTimeout(() => {
              history.goBack()
            }, 500)
          }
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <Container>
      <Modal
        modalTitle={'Hire the best Technical talent'}
        showModal={true}
        modalFooter={
          <Button
            type="submit"
            form={'hire--form'}
            spinnerWithTxt
            loading={loading}
            full
            secondary
          >
            Submit
          </Button>
        }
      >
        <form
          id="hire--form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <InputGroup
            label="Full Name"
            value={formData.full_name}
            name="full_name"
            required
            data-label={'Full name'}
            hasRequired={true}
            onChange={handleInput}
          />
          <InputGroup
            label="Email Address"
            type="email"
            value={formData.email}
            name="email"
            hasRequired={true}
            required
            data-label={'Email'}
            onChange={handleInput}
          />
          <InputGroup
            label="Organisation Name"
            onChange={handleInput}
            value={formData.organization_name}
            name="organization_name"
            hasRequired={true}
          />

          <footer>
            <h3>
              How can Ydev support your talent needs?
              <br />
              Select All that apply.
            </h3>

            {[
              'I want candidates for a full-time hire.',
              'I want candidates for a short-term contract.',
              "I want to explore a partnership opportunity with Ydev Academy I don't know yet. Send me more information.",
              'Others',
            ].map((item) => (
              <label key={item}>
                <input type="checkbox" value={item} onChange={handleSupport} />
                {item}
              </label>
            ))}
          </footer>

          {isOthersActive && (
            <InputGroup
              label="Other: Tell us how we can partner with you."
              type="textarea"
              name="otherSupport"
              onChange={handleInput}
              value={formData.otherSupport}
            />
          )}
        </form>
      </Modal>
    </Container>
  )
}

export default Apply
