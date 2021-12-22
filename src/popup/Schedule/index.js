import React, { useState } from 'react'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { Modal, InputGroup, Button } from '../../UI'
import { formValidator } from '../../helpers'
import { handleScheduleConsultation } from '../../redux/actions'
import Container from './styles'

const Schedule = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    organization_name: '',
  })

  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    if (
      formValidator(document.forms['hire--form'].getElementsByTagName('input'))
    ) {
      setLoading(true)
      handleScheduleConsultation(formData)
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
        modalTitle={'Schedule Consultation'}
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
            label="Phone Number"
            type="tel"
            value={formData.phone_number}
            name="phone_number"
            hasRequired={true}
            required
            data-label={'Phone Number'}
            onChange={handleInput}
          />
          <InputGroup
            label="Organisation Name"
            onChange={handleInput}
            value={formData.organization_name}
            name="organization_name"
            hasRequired={true}
          />
        </form>
      </Modal>
    </Container>
  )
}

export default Schedule
