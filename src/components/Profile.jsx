import Avater from './Avatar'
import GenderIcon from './GenderIcon'
import SocialLinks from './SocialLinks'
import ProfileContainer from './styled/ProfileContainer.styled'
import PropTypes from 'prop-types'
import { getAvatarLink } from '../utils'

export default function Profile({
  id,
  name,
  avatar,
  gender,
  skills,
  interests,
  biography,
  socialLinks,
}) {
  return (
    <ProfileContainer>
      <Avater
        url={avatar || getAvatarLink(`${name}.${id}`)}
        alt={`${name} Avatar`}
      />
      <div className="primary-detials-container">
        <h2>
          {name} <GenderIcon gender={gender} />
        </h2>
        <strong className="skills">{skills}</strong>
      </div>
      <div className="biography">
        <hr />
        {biography}
        <hr />
      </div>
      <div className="secondary-details-container">
        <strong>Interest:</strong> {interests}
      </div>
      <SocialLinks links={socialLinks} />
    </ProfileContainer>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  gender: PropTypes.string,
  skills: PropTypes.string,
  interest: PropTypes.string,
  biography: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.string),
}

Profile.defaultProps = {
  name: 'John Doe',
  gender: 'ambiguous',
  skills: 'Skills: unspecified',
  interest: 'Interest: unspecified',
  biography: 'Biography: not specified',
  socialLinks: [],
}
