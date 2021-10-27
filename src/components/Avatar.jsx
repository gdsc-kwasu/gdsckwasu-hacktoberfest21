import Image from 'next/image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AvatarContainer = styled.div`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;

  & > div {
    object-fit: cover;
    border-radius: 50%;
  }

  &::before {
    content: '';
    display: block;
    left: -0.8rem;
    top: -0.8rem;
    width: calc(100% + 1.2rem);
    height: calc(100% + 1.2rem);
    position: absolute;
    border: 0.2rem solid ${({ theme }) => theme.colors.profileAvatarBorder};
    border-radius: 50%;
  }
`

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
