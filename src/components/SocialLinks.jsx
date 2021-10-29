import Link from 'next/link'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from 'react-icons/fa'
import PropTypes from 'prop-types'
import SocialLinksContainer from './styled/SocialLinksContainer.styled'

/**
 * SocialIcon Component
 * the purpose of this component is to return appropriate social icon based on the link provided
 * it will return null if link is invalid or not supported
 */
function SocialIcon({ link }) {
  let icon

  // reason for wrapping in try-catch block is because an Exception will be thrown
  // when an invalid url (i.e missing http protocol) is passed to the URL class constructor
  // not sure if this should be kept or we should always assume students will provide a valid link in their details
  try {
    const url = new URL(link)
    switch (url.host) {
      case 'facebook.com':
      case 'www.facebook.com': // www.website.domain and website.domain are different cases
        icon = <FaFacebook />
        break
      case 'www.twitter.com':
      case 'twitter.com':
        icon = <FaTwitter />
        break
      case 'instagram.com':
      case 'www.instagram.com':
        icon = <FaInstagram />
        break
      case 'github.com':
      case 'www.github.com':
        icon = <FaGithub />
        break
      case 'behance.com':
      case 'www.behance.com':
        icon = <FaBehance />
        break
      case 'linkedin.com':
      case 'www.linkedin.com':
        icon = <FaLinkedin />
        break
    }
  } finally {
    if (icon) {
      return (
        <Link href={link} passHref>
          <a target="_blank">
            <i className="icon">{icon}</i>
          </a>
        </Link>
      )
    }
    return null
  }
}

export default function SocialLinks({ links }) {
  return (
    <SocialLinksContainer visible={links.length > 0}>
      {links.map((link, index) => (
        <SocialIcon link={link} key={index} />
      ))}
    </SocialLinksContainer>
  )
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}
