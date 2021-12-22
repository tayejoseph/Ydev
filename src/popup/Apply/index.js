import React, { useState } from 'react'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { ydevApplyNow } from '../../redux/actions'
import { Modal, InputGroup, Button } from '../../UI'
import { formValidator } from '../../helpers'
import { AppLogo } from '../../assets/convertedSvgs'
import Container from './styles'

const Apply = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    email: '',
  })
  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    try {
      if (
        formValidator([
          ...document.forms['apply-form'].getElementsByTagName('input'),
          ...document.forms['apply-form'].getElementsByTagName('textarea'),
        ])
      ) {
        setLoading(true)
        ydevApplyNow({
          ...formData,
        })
          .then((response) => {
            message.success('Successfully applied!')
            history.goBack()
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
      <Modal showModal={true}>
        <form
          name="apply-form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <header className="component--header">
            <AppLogo />
          </header>
          <InputGroup
            label="Full Name"
            value={formData.full_name}
            hasRequired={true}
            date-label="Full Name"
            name="full_name"
            onChange={handleInput}
          />
          <InputGroup
            label="Email"
            type="email"
            value={formData.email}
            hasRequired={true}
            name="email"
            data-label="Email"
            onChange={handleInput}
          />
          <InputGroup
            label="Phone Number"
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInput}
            hasRequired={true}
          />
          <Button type="submit" spinnerWithTxt loading={loading}>
            SignUp
          </Button>
        </form>
      </Modal>
    </Container>
  )
}

export default Apply
