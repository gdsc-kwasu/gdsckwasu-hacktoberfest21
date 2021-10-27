import { BsGenderMale, BsGenderFemale, BsGenderAmbiguous } from 'react-icons/bs'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const GenderIconContainer = styled.span`
  font-size: 1.6rem;
  display: flex;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.profileColorAlt};
  color: ${({ theme }) => theme.colors.profileColor};
`

function GenderComponent({ gender }) {
  if (gender === 'male') {
    return <BsGenderMale />
  }

  if (gender === 'female') {
    return <BsGenderFemale />
  }

  return <BsGenderAmbiguous />
}

export default function GenderIcon({ gender }) {
  return (
    <GenderIconContainer>
      <GenderComponent gender={gender} />
    </GenderIconContainer>
  )
}

GenderIcon.propTypes = {
  gender: PropTypes.string.isRequired,
}

GenderIcon.defaultProps = {
  gender: 'ambiguous',
}
