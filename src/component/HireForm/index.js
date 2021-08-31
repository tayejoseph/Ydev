import React, { useState } from 'react'
import { Button, InputGroup, Modal } from '../../UI'
import Container from './styles'

const checkedVal = [
  'I want candidates for a full-time hire.',
  'I want candidates for a short-term contract.',
  "I want to explore a partnership opportunity with Ydev Academy I don't know yet. Send me more information.",
  'Other',
]
const HelpForm = () => {
  const [formData, setFormDate] = useState({
    fullName: '',
    email: '',
    companyName: '',
    companyNameUrl: '',
    phoneNo: '',
    role: '',
    supportHelp: [],
    help: '',
  })
  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({ ...s, [name]: value }))
  }
  console.log(formData, 'sdsdlsdklk')
  const handleCheckInput = ({ target: { value, checked } }) => {
    console.log(checked, value, 'sdkjsdjsdkj')
    setFormDate((s) => ({
      ...s,
      supportHelp: !checked
        ? s.supportHelp.filter((s) => s !== value)
        : [...s.supportHelp, value],
    }))
  }

  const handleSubmit = () => {}
  return (
    <Container>
      <Modal
        modalTitle={'Hire The Best Technical Talents'}
        showModal={true}
        modalFooter={
          <Button full secondary>
            Submit
          </Button>
        }
      >
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
            label="Email Address"
            required={true}
            hasRequired
            name="email"
            value={formData.email}
            type="email"
            onChange={handleInput}
          />
          <InputGroup
            label="Organisation Name"
            required={true}
            hasRequired
            value={formData.companyName}
            name="companyName"
            onChange={handleInput}
          />
          <div className="select--container">
            <InputGroup>
              <h3>
                How Can Ydev support your talent needs? <br />
                Select All That apply.
              </h3>
              {checkedVal.map((item, index) => (
                <label key={`checked--${index}`}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={formData.supportHelp.includes(item)}
                    onChange={handleCheckInput}
                  />
                  {item}
                </label>
              ))}
            </InputGroup>
          </div>
          {formData.supportHelp.includes('Other') && (
            <InputGroup>
              <label>Other: Tell us how we can partner with you.</label>
              <textarea />
            </InputGroup>
          )}
        </form>
      </Modal>
    </Container>
  )
}

export default HelpForm
