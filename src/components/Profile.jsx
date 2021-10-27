import Avater from './Avatar'
import GenderIcon from './GenderIcon'
import SocialLinks from './SocialLinks'
import ProfileContainer from './styled/ProfileContainer.styled'

const avaterLink = (gender, name, id) => {
  const avaterSpirte =
    gender === 'male' ? 'male' : gender === 'female' ? 'female' : 'human'

  return `https://avatars.dicebear.com/api/${avaterSpirte}/${encodeURIComponent(
    `${name}.${id}`
  )}.svg?background=%23ffffff&mood[]=happy`
}

export default function Profile({ details }) {
  const {
    name,
    avatar,
    student_id,
    gender,
    skills,
    interest,
    biography,
    socialLinks,
  } = details

  return (
    <ProfileContainer>
      <Avater
        url={avatar || avaterLink(gender, name, student_id)}
        alt={`${name} Avatar`}
      />
      <div className="primary-detials-container">
        <h2>
          {name} <GenderIcon gender={gender} />
        </h2>
        <strong className="skills">{skills}</strong>
      </div>
      <p>
        <hr />
        {biography}
        <hr />
      </p>
      <div className="secondary-details-container">
        <strong>Interest:</strong> {interest}
      </div>
      <SocialLinks links={socialLinks} />
    </ProfileContainer>
  )
}

Profile.defaultProps = {
  details: {
    name: 'John Doe',
    gender: 'ambiguous',
    skills: 'Skills: unspecified',
    interest: 'Interest: unspecified',
    biography: 'Biography: not specified',
    socialLinks: [],
  },
}
