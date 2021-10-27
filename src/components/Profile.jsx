import styled from 'styled-components'
import Avater from './Avater'
import GenderIcon from './GenderIcon'
import SocialLinks from './SocialLinks'

const ProfileContainer = styled.div`
  height: 100vh;
  transition: height 0.25s ease-in-out;
  padding: 6rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  gap: 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.profileBg};
  color: ${({ theme }) => theme.colors.profileColor};

  div.primary-detials-container {
    text-align: center;

    h2 {
      letter-spacing: 0.2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }

  strong {
    font-weight: 500;
    font-size: 1rem;
  }

  div.secondary-details-container {
    font-size: 1rem;
    padding-bottom: 3rem;
  }

  p {
    padding: 0 2rem;
    overflow: hidden;
    min-height: 10rem;
    max-height: 24rem;
    font-size: 1.4rem;
    align-self: stretch;
    position: relative;
    text-align: center;

    &::before,
    &::after {
      height: 1px;
      content: '';
      background: ${({ theme }) => theme.colors.profileColor};
      display: block;
      width: min(600px, 100%);
      left: calc((100% - min(600px, 100%)) / 2);
      position: absolute;
    }

    &::before {
      margin-bottom: 1rem;
    }

    &::after {
      width: min(500px, 100%);
      left: calc((100% - min(500px, 100%)) / 2);
      margin-top: 1rem;
      bottom: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    border-radius: 2rem;
    height: max-content;
    max-height: 80vh;
  }
`

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
