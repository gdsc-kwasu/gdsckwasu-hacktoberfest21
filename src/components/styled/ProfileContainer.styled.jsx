import styled from 'styled-components'

const ProfileContainer = styled.div`
  height: 100vh;
  padding: 6rem 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  gap: 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.profileBg};
  color: ${({ theme }) => theme.colors.profileColor};
  transition: all 0.25s ease-in-out;

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

  div.biography {
    padding: 0 2rem;
    overflow: hidden;
    min-height: 10rem;
    max-height: 24rem;
    font-size: 1.4rem;
    align-self: stretch;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & hr:first-of-type {
      width: min(400px, 100%);
      margin-bottom: 1rem;
    }

    & hr:last-of-type {
      width: min(300px, 100%);
      margin-bottom: 1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    border-radius: 2rem;
    height: max-content;
    max-height: 80vh;
  }
`

export default ProfileContainer
