import React from 'react'
import { v4 as uuid } from 'uuid'
import {
  Spur,
  PalmCredit,
  OneHealth,
  Echo,
  Unilag,
  Access,
  Zenith,
  Imad,
} from '../../assets/convertedSvgs'
import Container from './styles'

const hires = [
  { logo: Spur, link: 'https://spurt.solutions/' },
  {
    logo: PalmCredit,
    link: 'https://www.facebook.com/palmcredit/?_rdc=1&_rdr',
  },
  { logo: OneHealth, link: 'https://onehealthng.com/' },
  { logo: Echo, link: 'https://www.echovc.com/' },
  { logo: Unilag, link: 'https://unilag.edu.ng/' },
  { logo: Access, link: 'https://www.accessbankplc.com/' },
  { logo: Zenith, link: 'https://www.zenithbank.com/' },
  { logo: Imad, link: 'https://www.imaadedu.com/' },
]

const CompanyHire = ({ title }) => {
  return (
    <Container>
      <h1 className="u--typo__title2">{title}</h1>
      <div className="grid--container">
        {hires.map((item) => (
          <div key={uuid()}>
            <a href={item.link} target="__blank">
              <item.logo />
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default CompanyHire
