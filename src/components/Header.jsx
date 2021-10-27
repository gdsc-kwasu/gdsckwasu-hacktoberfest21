import styled from 'styled-components'

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.headerBg};
  font-family: Pacifico;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  h1 {
    color: ${({ theme }) => theme.colors.headerColor};
    text-shadow: 0px 0px 20px ${({ theme }) => theme.colors.headerShadowColor};
    transition: all 0.25s ease-in-out;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    background: none;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Devllary</h1>
    </HeaderContainer>
  )
}
