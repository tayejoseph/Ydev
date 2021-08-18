import React from 'react'
import { ReachUs, TitleWithDesign } from '../../component'
import Container from './styles'

const TermsAndCondition = () => {
  return (
    <Container>
      <header>
        <TitleWithDesign title="Terms and conditions" />
      </header>
      <div className="content--container">
        <section>
          <h1 className="u--typo__subtitle">Introduction</h1>
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern Ydev Academy’s (Incorporated) relationship
            with you in relation to this website. If you disagree with any part
            of these terms and conditions, please do not use our website. The
            term ‘Ydev Academy’ or ‘us’ or ‘we’ refers to the owner of the
            website whose registered office is 10, Hughes Avenue, 100001, Yaba,
            Lagos, Nigeria. The term ‘you’, ‘your’, ‘your team’, ‘your
            organization’ refers to the user or viewer of our website.
          </p>
        </section>

        <section>
          <h1 className="u--typo__subtitle">Use of our website</h1>
          <p>
            The use of this website is subject to the following terms of use:
          </p>
          <ul>
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
          </ul>
        </section>
      </div>
      <ReachUs />
    </Container>
  )
}

export default TermsAndCondition
