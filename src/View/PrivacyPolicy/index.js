import React from 'react'
import { ReachUs, TitleWithDesign } from '../../component'
import Container from './styles'

const PrivacyPolicy = () => {
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
            <li>
              This website uses cookies to monitor browsing preferences. If you
              do allow cookies to be used, personal information may be stored.{' '}
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.{' '}
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services or information available through this website meet your
              specific requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
            <li>
              All trademarks reproduced in this website which is not the
              property of, or licensed to, the operator is acknowledged on the
              website.
            </li>
            <li>
              Unauthorised use of this website may give rise to a claim for
              damages and/or be a criminal offence.
            </li>
            <li>
              From time to time this website may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s).
            </li>
            <li>
              Your use of this website and any dispute arising out of such use
              of the website is subject to the laws of Nigeria, and laws of
              other relevant jurisdictions.
            </li>
          </ul>
        </section>
      </div>
      <div className="reach--container">
        <ReachUs />
      </div>
    </Container>
  )
}

export default PrivacyPolicy