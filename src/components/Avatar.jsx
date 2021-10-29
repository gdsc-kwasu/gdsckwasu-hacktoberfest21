import Image from 'next/image'
import PropTypes from 'prop-types'
import AvatarContainer from './styled/AvatarContainer.styled'

export default function Avatar({ url, alt }) {
  return (
    <AvatarContainer>
      <Image src={url} alt={alt} layout="fill" />
    </AvatarContainer>
  )
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
