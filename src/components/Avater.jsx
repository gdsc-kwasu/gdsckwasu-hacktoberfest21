import Image from 'next/image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AvaterContainer = styled.div`
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
    border: 0.2rem solid ${({ theme }) => theme.colors.profileAvaterBorder};
    border-radius: 50%;
  }
`

export default function Avater({ url }) {
  return (
    <AvaterContainer>
      <Image src={url} alt="Avater Image" layout="fill" />
    </AvaterContainer>
  )
}

Avater.propTypes = {
  url: PropTypes.string.isRequired,
}
