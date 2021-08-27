import { v4 as uuid } from 'uuid'
import { Facebook, LinkedIn, Twitter, Instagram } from '../assets/convertedSvgs'

const footerContent = {
  aboutSite:
    'Fast track your tech career with a community that cares about your growth. Map your journey, get trained and join a community that supports you.',
  socials: [
    { link: '/facebooks', key: uuid(), icon: <Facebook /> },
    { link: '/facebooks', key: uuid(), icon: <LinkedIn /> },
    { link: '/facebooks', key: uuid(), icon: <Twitter /> },
    { link: '/facebooks', key: uuid(), icon: <Instagram /> },
  ],
}

export default footerContent
