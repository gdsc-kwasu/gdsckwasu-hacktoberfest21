import Link from 'next/link'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from 'react-icons/fa'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SocialLinksContainer = styled.div`
  padding: 0 5rem;
  background: ${({ theme }) => theme.colors.themeColor};
  font-size: 3rem;
  display: flex;
  height: 2rem;
  gap: 1rem;
  border-radius: 1000px;

  div.icon {
    margin: -1.5rem 0;
    width: 5rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.themeColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

function SocialIcon({ link }) {
  let icon
  try {
    const url = new URL(link)
    switch (url.host) {
      case 'facebook.com':
      case 'www.facebook.com':
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
          <div className="icon">{icon}</div>
        </Link>
      )
    }
    return null
  }
}

export default function SocialLinks({ links }) {
  if (links.length === 0) {
    return null
  }

  return (
    <SocialLinksContainer>
      {links.map((link, index) => (
        <SocialIcon link={link} key={index} />
      ))}
    </SocialLinksContainer>
  )
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}
