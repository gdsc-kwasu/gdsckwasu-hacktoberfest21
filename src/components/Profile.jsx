import Avater from './Avater'
import GenderIcon from './GenderIcon'
import SocialLinks from './SocialLinks'
import ProfileContainer from './styled/ProfileContainer'

export default function Profile({
  name,
  gender,
  skills,
  interest,
  biography,
  socialLinks,
}) {
  return (
    <ProfileContainer>
      <Avater />
      <div className="primary-detials-container">
        <h2>
          {name} <GenderIcon gender={gender} />
        </h2>
        <strong className="skills">{skills}</strong>
      </div>
      <p>{biography}</p>
      <div className="secondary-details-container">
        <strong>Interest:</strong> {interest}
      </div>
      <SocialLinks links={socialLinks} />
    </ProfileContainer>
  )
}

Profile.defaultProps = {
  name: 'John Doe',
  gender: 'ambiguous',
  skills: 'unspecified',
  interest: 'unspecified',
  biography: 'not specified',
  socialLinks: [],
}
