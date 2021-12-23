import React from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { Modal, Button } from '../../../UI'
import { toMoney } from '../../../helpers'
import { flutterwaveConfig } from '../../../config'
import { Checked } from '../../../assets/convertedSvgs'
import Container from './styles'

const config = {
  public_key: flutterwaveConfig.public_key,
  tx_ref: Date.now(),
  currency: 'NGN',
  country: 'NG',
  payment_options: ' ',
  customer: {},
  customizations: {},
}
const ApplicationModal = ({
  jumbotron,
  formData,
  showModal,
  loading,
  handleHide,
  handleSubmit,
}) => {
  config.customer = {
    email: formData.email,
    phone_number: formData.phone,
    name: formData.full_name,
  }
  config.customizations = {
    title: jumbotron.title,
    description: jumbotron.details,
    logo: flutterwaveConfig.logoUrl,
  }

  config.amount = jumbotron.price

  const handleFlutterPayment = useFlutterwave(config)

  const handlePayment = (amount) => {
    handleFlutterPayment({
      callback: (data) => {
        handleSubmit({
          payment: true,
          reference: data.transactionRef,
        }).then((response) => {
          if (response && response.success) {
            setTimeout(() => {
              closePaymentModal()
            }, 300)
          }
        })
      },
      onClose: (response) => {},
    })
  }
  return (
    <Container>
      <Modal showModal={showModal} onClose={handleHide}>
        <div className="modal-row">
          <div className="col-1">
            <div className="header-row">
              <h1>{jumbotron.title}</h1>
              <h1>₦{toMoney(jumbotron.price)}</h1>
            </div>
            <p>{jumbotron.details}</p>
            <ol>
              {jumbotron.lists.map((item) => (
                <li key={item}>
                  <Checked />
                  {item}
                </li>
              ))}
            </ol>
            <div className="btn-group">
              <Button disabled={loading} onClick={handlePayment}>
                Proceed with payment
              </Button>
              <Button
                disabled={loading}
                loading={loading}
                spinnerWithTxt
                onClick={() => handleSubmit()}
              >
                Submit Application
              </Button>
            </div>
          </div>
          <div className="col--2">{/* <StarChecked /> */}</div>
        </div>
        <div className="col-2"></div>
      </Modal>
    </Container>
  )
}

export default ApplicationModal
