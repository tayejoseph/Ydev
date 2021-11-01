import { Facebook, LinkedIn, Twitter, Instagram } from '../assets/convertedSvgs'
import contacts from './contacts'
const footerContent = {
  aboutSite:
    'Fast track your tech career with a community that cares about your growth. Map your journey, get trained and join a community that supports you.',
  socials: [
    { link: contacts.socials.facebook, icon: <Facebook /> },
    { link: contacts.socials.linkedIn, icon: <LinkedIn /> },
    { link: contacts.socials.twitter, icon: <Twitter /> },
    { link: contacts.socials.instagram, icon: <Instagram /> },
  ],
}

export default footerContent
