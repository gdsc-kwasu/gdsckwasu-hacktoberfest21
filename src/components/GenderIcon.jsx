import { BsGenderMale, BsGenderFemale, BsGenderAmbiguous } from 'react-icons/bs'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GenderIconContainer from './styled/GenderIconContainer.styled'

/**
 * GenderComponent Component
 * to return appropriate bootstrap gender icon component based on the gender string prop passed
 */
function GenderComponent({ gender }) {
  if (gender === 'male') {
    return <BsGenderMale />
  } else if (gender === 'female') {
    return <BsGenderFemale />
  } else {
    return <BsGenderAmbiguous />
  }
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
